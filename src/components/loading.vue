<template>
  <v-dialog row wrap persistent v-model="active">
    <v-card height="200px">
       <img src="../assets/loader.gif" width="300rem" height="100%" alt="map" />
    </v-card>
    <div id="loading">Carregando...</div> 
  </v-dialog>
</template>
<script>
export default {
  props: {
    active: Boolean,
  },
};
</script>
<style>
#loading{
position: absolute;
top: 60%;
left: 10;
font-family: 'Courier New', Courier, monospace;
font-size: 20px;
}
</style>
