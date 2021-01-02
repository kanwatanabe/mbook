<template>
    <nav>
    <v-app-bar
      dense
    >

      <v-toolbar-title>m book</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-app-bar-nav-icon
         @click.stop="drawer = !drawer"
      >
      </v-app-bar-nav-icon>
      </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >

    <v-list dense>
        <v-list-item-group
          link
        >
          <v-list-item-content>
            <v-list-item>Test</v-list-item>
          </v-list-item-content>

          <v-list-item-content>
            <v-list-item>Test</v-list-item>
          </v-list-item-content>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </nav>

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