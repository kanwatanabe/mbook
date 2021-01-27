<template>
    
  <!-- <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    > -->

    <!-- <template v-slot:activator="{ on, attrs }"> -->
    <!-- <v-btn v-bind="attrs" v-on="on" text> -->
    <!-- <v-btn text > -->
    <v-file-input label="image"
                  prepend-icon="mdi-image-plus"
                  accept="image/png, image/jpeg, image/jpg, image/gif"
                  @change="onImgPicked">
    </v-file-input>
    <!-- </v-btn> -->
    <!-- </v-btn>-->
    <!-- </template> -->
     
    <!-- <v-card>

     <v-btn color="red darken-1" text @click="dialog = false">
        <v-icon>
            mdi-close-circle-outline
        </v-icon>
        Close
     </v-btn>

     <v-card-title>
          <span>プロフィール写真</span>
     </v-card-title>

     <v-card-title>
          <span>ユーザー情報</span>
     </v-card-title>

    </v-card>

  </v-dialog> -->
    
</template>

<script>

import axios from 'axios';
import router from '../../../routes/route'
export default {

    data: () => ({
      dialog: false,

      image: null,
    }),

    computed: {

      headers () {
      return this.$store.state.headers
    }

    },

     methods: {
        onImgPicked(e) {
          this.image=e;
          console.log(this.image)
          const formData=new FormData();
          formData.append("image",this.image)
          console.log(formData)
          const config= {
          headers: {
           "content-type": "multipart/form-data"}
          };

          // axios.patch(`http://localhost:3000/v1/auth/${this.$store.getters.user.id}`,{formData,config})
          axios.put(`http://localhost:3000/v1/auth`,formData,{
          headers: this.headers, config
        })
        
            .then(response => {
              console.log(response);
              router.push({name: "home"})
            })
             .catch(error => {
                console.log(error);
            });
          
        },
     }
    
}
</script>