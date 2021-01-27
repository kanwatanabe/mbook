<template>
<v-container>
    <form>

    <v-text-field
      v-model="shop.name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    
    <v-text-field
      v-model="shop.profile"
      :error-messages="nameErrors"
      label="Profile"
      required
      @input="$v.profile.$touch()"
      @blur="$v.profile.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="shop.category"
      :error-messages="nameErrors"
      label="Category"
      required
      @input="$v.category.$touch()"
      @blur="$v.category.$touch()"
    ></v-text-field>
    
    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
</v-container>
</template>

<script>
 import { validationMixin } from 'vuelidate';
 import { required, maxLength } from 'vuelidate/lib/validators';

 import axios from 'axios';

  export default {
    
    // バリデーション-----------------------------------
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      profile: { required, maxLength: maxLength(10) },
      category: { required, maxLength: maxLength(10) },
    },
    // ------------------------------------------------

    data: () => ({
      
      shop: {
        name: '',
        profile: '',
        category: '',
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
      submit () {
        // this.$v.$touch()
        axios.post('http://localhost:3000/facility/create', {shop: this.shop})
        // ,{
        //       name: this.name,
        //       profile: this.profile,
        //       category: this.category

        // }
        // .then(response => {
        // //     this.facilitys = response.data;
        //     const data = response.data
        //     console.log(data.name);
        // // })
        // // .catch(error => {
        // //       console.log(error);
        // });
      },

      clear () {
        this.$v.$reset()
        this.shop.name = ''
        this.shop.profile = ''
        this.shop.category = ''
      },
    },


  }
</script>

<style>

</style>