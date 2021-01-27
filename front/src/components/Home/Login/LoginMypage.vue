<template>

<v-container class="mt-5">

    <LoginDate/>

    <v-row>
<v-card
  width="1200"
  height="300">
  <v-card-title class="font-italic">
      本日の予定
  </v-card-title>

  <v-list-group>
      <v-list-item>
          test
      </v-list-item>
      <v-list-item>
          test
      </v-list-item>
      <v-list-item>
          test
      </v-list-item>
  </v-list-group>

  <v-divider></v-divider>


</v-card>

<v-card
  width="1200"
  height="300">
  <v-card-title class="font-italic">
    今後の予定
  </v-card-title>

  <v-list-item>
    test
  </v-list-item>
  <v-list-item>
    test
  </v-list-item>
  <v-list-item>
    test
  </v-list-item>

  <v-divider></v-divider>


</v-card>
</v-row>
</v-container>

</template>

<script>
import LoginDate from './LoginDate.vue';
export default {
    components: {
        LoginDate,
    },
    
}
</script>