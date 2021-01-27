<template>

<v-container>
     <v-row>

      <v-col
        class="mt-5 mb-5"
        cols="12"
      >
        <h2 class="font-italic mb-3">
          SHOP LIST
        

        <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>
      </h2>

        <v-divider></v-divider>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>      

      
    </v-row>
     
    <!-- <v-virtual-scroll
      :item-height="50"
      height="300"> -->

    <HomeShops/>

<!-- </v-virtual-scroll> -->

    </v-container>

</template>

// <script>
import HomeShops from '../../Facility/HomeShops.vue';

  export default {
    components: {
      HomeShops
    },

    data: () => ({
     
      
    }),
  }
</script>