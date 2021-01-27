<template>
    <v-container>
    <form>

    <v-text-field
      v-model="login.email"
      :error-messages="nameErrors"
      :counter="10"
      label="Email"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="login.password"
      :error-messages="nameErrors"
      label="Password"
      required
      @input="$v.password_digest.$touch()"
      @blur="$v.password_digest.$touch()"
    ></v-text-field>
    
    <v-btn
      class="mr-4"
      @click="submit"
    >
      login
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>

  <button @click="signOut">ログアウト</button>

</v-container>
</template>

<script>
import { validationMixin } from 'vuelidate';
 import { required, maxLength } from 'vuelidate/lib/validators';

//  import axios from 'axios';
//  import router from '../../routes/route'

export default {

      // バリデーション-----------------------------------
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      password_digest: { required, maxLength: maxLength(10) },
    },
    // ------------------------------------------------

    data: () => ({
      
      login: {
        email: '',
        password: '',
      }
    }),

    computed: {
      profileErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      categoryErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {

      // submit () {
      //   // this.$v.$touch()
      //   axios.post('http://localhost:3000/v1/auth/sign_in', {
      //     email: this.login.email,
      //     password: this.login.password,
      //   })

         submit () {
           this.$store.dispatch('signIn', { email: this.login.email, password: this.login.password})
         },
        // ,{
        //       name: this.name,
        //       profile: this.profile,
        //       category: this.category

        // }


        // .then(response => {
        //     console.log(response);
        //     router.push({name: "home"})
        // })
        // .catch(error => {
        //       console.log(error);
        // });
      // },

      clear () {
        this.$v.$reset()
        this.login.email = ''
        this.login.password = ''
      },



      signOut() {
        this.$store.dispatch('signOut')
      }
    },

    
}
</script>