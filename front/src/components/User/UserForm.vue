<template>
    <v-container>

      <h2 class="font-italic mt-5">新規登録</h2>

    <form>

    <!-- プロフィール写真 投稿フォーム--------------------------- -->
    <!-- <v-file-input  
      chips
      accept="image/png, image/jpeg, image/jpg, image/gif"
      label="プロフィール写真"
      @change="onImgPicked"
    ></v-file-input> -->
    <!-- ----------------------------------------------------- -->


    <v-text-field
      v-model="user.name"
      :error-messages="nameErrors"
      :counter="10"
      label="名前"
      required
      @input="$v.user.name.$touch()"
      @blur="$v.user.name.$touch()"
    ></v-text-field>
   
    <v-radio-group row v-model="user.sex">
      <p class=mr-5>性別</p>
      <v-radio
        v-for="n in radiogroups"
        :key="n.key"
        :label="n.label"
        :value="n.value"
      ></v-radio>
    </v-radio-group>
    
    <v-form>
      <p class="mt-1">生年月日
    <UserBirthday/></p>
    </v-form>
    
    <v-text-field
      v-model="user.email"
      :error-messages="emailErrors"
      :counter="255"
      label="メールアドレス"
      required
      @input="$v.user.email.$touch()"
      @blur="$v.user.email.$touch()"
    ></v-text-field>

    <v-text-field
      v-model="user.password"
      :error-messages="passwordErrors"
      :counter="10"
      label="パスワード"
      required
      @input="$v.user.password.$touch()"
      @blur="$v.user.password.$touch()"
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
    
    
    <v-alert
      class="mt-5"
      dense
      outlined
      type="error"
      :value="alert_value"
    >ログインできませんでした</v-alert>
    

  </form>
</v-container>
</template>

<script>
 import { validationMixin } from 'vuelidate';
 import { required, maxLength, minLength,email } from 'vuelidate/lib/validators';
 import UserBirthday from './UserBirthday.vue'

//  import axios from 'axios';
//  import router from '../../routes/route'

  export default {

    components: {
        UserBirthday,
    },
    
    // バリデーション-----------------------------------
    mixins: [validationMixin],

    validations: {
      user: {
        name: { required, maxLength: maxLength(10)},
        email: { required, email, maxLength: maxLength(255)},
        select: { required },
        password: { required, maxLength: maxLength(10),minLength: minLength(6) },
      }},
    // ------------------------------------------------

    data: () => ({
      alert_value: false,
      radiogroups:[{key:1,label:"男",value:1},{key:2,label:"女",value:2},{key:3,label:"その他",value:3}],
    
      user: {
        name: "",
        nickname: "",
        email: "",
        password: "",
        uid: "",
        access_token: "",
        client: "",

        sex: null,
        
      },
    }),

    computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.user.name.$dirty) return errors
        !this.$v.user.name.maxLength && errors.push('名前は１０文字以内で入力してください')
        !this.$v.user.name.required && errors.push('名前を入力してください ')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.user.email.$dirty) return errors
        !this.$v.user.email.email && errors.push('メールアドレスを入力してください')
        !this.$v.user.email.maxLength && errors.push('２５５文字以内で入力してください')
        !this.$v.user.email.required && errors.push('メールアドレスを入力してください')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.user.password.$dirty) return errors
        !this.$v.user.password.maxLength && errors.push('パスワードは１０文字以上,６文字以内で入力してください')
        !this.$v.user.password.minLength && errors.push('パスワードは１０文字以上,６文字以内で入力してください')
        !this.$v.user.password.required && errors.push('パスワードを入力してください')
        return errors
      },
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

        this.$store.dispatch('signUp', { name: this.user.name, email: this.user.email, password: this.user.password})
        
        // axios.post('http://localhost:3000/v1/auth',{

        //   name: this.user.name,
        //   email: this.user.email,
        //   password: this.user.password,
        //   sex: this.user.sex,
          
        // })
        
        // .then(response => {
        //     console.log(response);
        //     router.push({name: "home"})
        // })
        // .catch(error => {
        //       console.log(error);
        //       this.alert_value=true;
              
        // });
      },

      clear () {
        this.$v.$reset()
        this.user.name = ''
        this.user.email = ''
        this.user.password = ''
        this.user.sex=null
        this.alert_value=false
      },
    },

    
}
</script>