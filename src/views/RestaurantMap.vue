<template>
  <div>
    <img src="../assets/map.png" width="90%" height="70%" alt="map" id="mapMock" />
    <v-data-table
      :headers="headers"
      :items="places"
      hide-default-footer
      no-data-text="Nenhum restaurante encontrado"
      no-results-text="Nenhum restaurante encontrado"
    >
      <template v-slot:item="{ item }">
        <tr @click="getRestaurantInfos(item.id)">
          <td class="text-xs-center">{{ item.name }}</td>
          <td class="text-xs-center">{{ item.category }}</td>
          <td class="text-xs-center">
         <v-icon >mdi-chevron-right-circle</v-icon></td>
        </tr>
      </template>
    </v-data-table>
    <v-btn @click="back" class="bottom-btn">Logout</v-btn>
  </div>
</template>
<script>
export default {
  props: {},
  methods: {
    log() {
      console.log(this.headers);
    },
    back(){
      this.$router.push({ name: 'Login' })
    },
    getRestaurantInfos(itemId){
        console.log(itemId)
         this.$router.push({ name: 'Profile' , params:{id : itemId }})
    }
  },
  data() {
    return {
      places: [
        { id: "1", name: "Batatony's", category: "lanches" },
        { id: "2", name: "Churrasco vegano", category: "churrasco" },
         { id:"3", name: "Burguer Queen", category: "lanches" },
      ],
      headers: [
        { text: "Nome", value: "name" },
        { text: "Categoria", value: "category" },
      ],
    };
  },
};
</script>
<style>
#mapMock {
  padding-top: 20px;
}
.bottom-btn{
    position: absolute;
    bottom: 10px;
    right: 20px;
    font-size: 20px !important;
    color: red !important;
}

</style>