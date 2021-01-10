<template>
  <v-main>
      {{$route.params.data}}
      {{data.name}}
      {{data.id}}
  </v-main>
    
</template>

<script>
export default {
    data() {
        return {
            data: this.$route.params.data
        }
    }
}
</script>