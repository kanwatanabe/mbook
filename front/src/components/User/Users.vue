<template>
<v-app>

  <!-- <v-list-item 
    v-for="user in users" v-bind:key="user.id"> -->

    <!-- <v-list-item-content>{{user.name}}</v-list-item-content>
    <v-list-item-content>{{user.sex}}</v-list-item-content>
    <v-list-item-content>{{user.birthday}}</v-list-item-content>
    <v-list-item-content>{{user.password_digest}}</v-list-item-content> -->
    <!-- <v-list-item-content>{{user.email}}</v-list-item-content>
    <v-list-item-content>{{user.image}}</v-list-item-content> -->

    <v-list-item-content>{{user.data.id}}</v-list-item-content>

  <!-- </v-list-item> -->
</v-app>
</template>

<script>
import axios from 'axios';
export default {

   computed: {
    //main.jsでローカルにstoreを登録してるので、$storeが使える
    //ここではgettersに登録したmessageゲッターを使ってstoreのstateのmessageを取得している
    user(){
     return this.$store.getters.user
   }
  },

    data() {
      return {
      //axiosで取得するデータを入れるため、空でOK
        users: [],
      }
    },
    
    mounted() {
          // axios.get('http://localhost:3000/facility/index?page=${this.page}?per=${this.itemsPerPage}')
          // axios.get('http://localhost:3000/users/index')
          axios.get('http://localhost:3000/facility/test')
        .then(response => {
            this.users = response.data;
            console.log(response);
        })
        .catch(error => {
              console.log(error);
        });
    },
    
}
</script>