<template>
<div>
    <!-- <nav> -->
    <v-app-bar
      dense
      fixed
      flat
      class= transparent
    >

      <v-toolbar-title class= "title">
        <router-link 
        style="text-decoration: none; color: inherit; font-weight: bold; font-size: 1.7em;"
        to="/loginhome">m book</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      
      <!-- <transition> -->
      <v-app-bar-nav-icon 
         @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      <!-- </transition> -->

      </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
      fixed
      class='mt-10'
      style='top: 16px'
    >

    <v-list dense>
        <v-list-item-group
          link
        >
          <!-- <v-list-item-content> -->
            <v-list-item>
              <router-link to="/shopform">施設登録</router-link>
            </v-list-item>
          <!-- </v-list-item-content> -->

           <v-divider></v-divider>

          <!-- <v-list-item-content> -->
            <v-list-item>
              <router-link :to="{ name: 'UserForm'}">ユーザー登録</router-link>
            </v-list-item>
          <!-- </v-list-item-content> -->

          <v-divider></v-divider>

            <v-list-item>
              <router-link :to="{ name: 'Users'}">ユーザー 一覧</router-link>
            </v-list-item>

          <v-divider></v-divider>

            <v-list-item>
              <router-link :to="{ name: 'UserLogin'}">ユーザーログイン</router-link>
            </v-list-item>

            <v-divider></v-divider>
          
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- </nav> -->
    </div>

</template>

<script>
export default{

    data() {
    return {
      drawer: false
    }
  } 
}
</script>

<style>
  .title {

    font-weight: bold;
    color: black;
    text-decoration: none;

  }
  /* .v-enter-active ,
  .v-leave-active {
    transition: opacity .5s;
  }
  .v-enter, .v-leave-to {
  opacity: 0;
} */
</style>