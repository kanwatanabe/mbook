<template>
<v-container>
<v-row>
  <v-card
    class="mx-auto my-5"
    max-width="344"
    width="344"
    outlined
    cols="4"
    v-for="facility in facilitys" v-bind:key="facility.id"
  >
    <v-list-item three-line>
      <v-list-item-content>

        <!-- <div class="overline mb-4">

          <router-link :to="{ name: 'ParamsShop', params: { id: facility.id,data: facility }}">{{facility.name}}</router-link>

        </div> -->

        <v-list-item-title class="headline mb-1">
          <router-link :to="{ name: 'ParamsShop', params: { id: facility.id,data: facility }}">{{facility.name}}</router-link>
        </v-list-item-title>
        <v-list-item-subtitle>{{facility.profile}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
  </v-row>

  <v-row justify="center">
  <v-pagination
      v-model="page"
      :length="totalPages"
      @input="fetchShops"
    >
  </v-pagination>
  </v-row>

  </v-container>

</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
      //axiosで取得するデータを入れるため、空でOK
        // facilitys: null,
        facilitys: [],
        totalPages: null,
        page: 1,
        itemsPerPage: 6,
      }
    },
    
    // mounted() {
    //     // axios.get('http://localhost:3000/facility/index')
    //       //  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //       // axios.get('http://localhost:3000/facility/index?page=${this.page}?per=${this.itemsPerPage}')
    //       axios.get('http://localhost:3000/facility/index?page=${this.page}?per=${this.itemsPerPage}')
    //     .then(response => {
    //         this.facilitys = response.data.facility;
    //         this.totalPages = response.data.total_pages;
    //         console.log(response);
    //     })
    //     .catch(error => {
    //           console.log(error);
    //     });
    // },

     methods: {

       fetchShops() {

        //  axios.get('http://localhost:3000/facility/index')
          //  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
          axios.get(`http://localhost:3000/facility/index?page=${this.page}?per=${this.itemsPerPage}`)
        .then(response => {
            this.facilitys = response.data.facility;
            this.totalPages = response.data.total_pages;
            console.log(response);
        })
        .catch(error => {
              console.log(error);
        });
        }

     },

     created() {
      this.fetchShops()
    },

  }

</script>