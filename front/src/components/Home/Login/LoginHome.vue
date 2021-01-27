<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <!-- <h1 class="text-center display-2 font-weight-bold mb-3">
          Welcome to m book
        </h1> -->

        <v-list-item two-line class="mt-10">
          <v-list-item-avatar size="80">
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

        <!-- ユーザー設定変更 --------------------------------  -->
        <v-menu top>
            <template v-slot:activator="{ on, attrs }">
             <v-btn class="ma-2" icon text>
               <v-icon v-bind="attrs" v-on="on">
                mdi-cog-outline
               </v-icon>
             </v-btn>
            </template>

          <v-list>
            <v-list-item>
              <v-list-item-title><LoginUserImage/></v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title><LoginUserSetting/></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- ------------------------------------------------  -->

          <v-list-item-content>
            <v-list-item-title>{{user.data.name}}</v-list-item-title>
            <v-list-item-subtitle>ログイン中</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-col>

    <!-- TAB bar ----------------------------------------------- -->
      <v-tabs v-model="tab"
              fixed-tabs
              background-color="white"
              color="black">             
        <v-tab  href="#Home">
          Shops
        </v-tab>
        <v-tab>
          Likes(お気に入り)
        </v-tab>
        <v-tab href="#MyPage">
          MyPage
        </v-tab>
      </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item value="Home">
        <LoginMain/>    
      </v-tab-item>
      <v-tab-item value="tab-2">
        タブ2で表示するコンテンツ    
      </v-tab-item>
      <v-tab-item value="MyPage">
        <LoginMyPage/> 
      </v-tab-item>
    </v-tabs-items>
  <!-- ------------------------------------------------------------- -->

      
    </v-row>
    
  </v-container>
</template>

<script>
import LoginMain from './LoginMain.vue';
import LoginMyPage from './LoginMypage.vue';
import LoginUserImage from './LoginUserImage.vue';
import LoginUserSetting from './LoginUserSetting.vue';
  export default {
    components: {
        LoginMain,
        LoginMyPage,
        LoginUserImage,
        LoginUserSetting
    },

    computed: {
      user(){
        return this.$store.getters.user
      }
     },

    data () {
    return {
      tab: ['Home','MyPage']

    }
  }
  }
</script>