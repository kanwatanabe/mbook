<template>

<v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >

    <template v-slot:activator="{ on, attrs }">
    <v-btn v-bind="attrs" v-on="on" text>
    <v-icon>
      mdi-account-circle-outline
    </v-icon>
    ユーザー情報
    </v-btn>
    </template>
     
    
     <v-card>
     <v-container>
     <v-btn color="red darken-1" text @click="dialog = false">
        <v-icon>
            mdi-close-circle-outline
        </v-icon>
        Close
     </v-btn>

     <h2 class="font-italic mt-5">ユーザー設定</h2>
     
     <form>
     <v-text-field
      v-model="user.name"
      :error-messages="nameErrors"
      :counter="10"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    
    <v-text-field
      v-model="user.email"
      :error-messages="nameErrors"
      label="Email"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="user.password"
      :error-messages="nameErrors"
      label="NewPassword"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="user.current_password"
      :error-messages="nameErrors"
      label="CurrentPassword"
      required
      @input="$v.password.$touch()"
      @blur="$v.password.$touch()"
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
  </v-card>

  </v-dialog>
    
</template>

<script>

import {validationMixin} from 'vuelidate';
import {required,maxLength} from 'vuelidate/lib/validators';


// import axios from 'axios';
// import router from '../../../routes/route'

  export default {
    
    // バリデーション-----------------------------------
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(10) },
      sex: { required, maxLength: maxLength(10) },
      email: { required, maxLength: maxLength(10) },
      password: { required, maxLength: maxLength(10) },
    },
    // ------------------------------------------------

    data: () => ({
    
      user: {
        name: "",
        email: "",
        password: "",
        current_password:"",
        uid: "",
        access_token: "",
        client: "",
        title: "",
        content: "",
        comment: "",
      },

      dialog: false,
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

      headers () {
      return this.$store.state.headers
    }
     
    },

    methods: {
    
    // image タイプをファイルに変換------------------------------

      // onImgPicked(e) {
      //      this.image=e;
      //      console.log(this.image)

      //      const formData=new FormData();
      //      formData.append("image",this.image)
      //      console.log(formData)
      //      const config= {
      //      headers: {
      //      "content-type": "multipart/form-data",
      //        }
      //       };
      //      console.log(config)
      // },

      // -------------------------------------------------------
    
      submit () {
        
        // axios.post('http://localhost:3000/v1/auth',{
        //   axios.put('http://localhost:3000/v1/auth',{
        //   name: this.user.name,
        //   email: this.user.email,
        //   password: this.user.password,
        //   current_password: this.user.current_password,
          
        // })

        this.$store.dispatch('userSetting', this.user)
        // axios.put('http://localhost:3000/v1/auth',this.user,{
        //   headers: this.headers
        // })
        
        // .then(response => {
        //     console.log(response);
        //     router.push({name: "home"})
        // })
        // .catch(error => {
        //       console.log(error);
        // });
      },

      clear () {
        this.$v.$reset()
        this.user.name = ''
        this.user.email = ''
        this.user.password = ''
        this.user.current_password = ''
      },
    },

    

    // data: () => ({
    //   dialog: false,
    // }),
    
}
</script>