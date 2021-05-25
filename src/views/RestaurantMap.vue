<template>
  <div>
    <Load
    :active = loading
    ></Load>
    <img src="../assets/map.png" width="90%" height="70%" alt="map" id="mapMock" />
    <div>Restaurantes da cidade</div>
    <v-data-table
      :headers="headers"
      :items="restaurants"
      hide-default-footer
      no-data-text="Nenhum restaurante encontrado"
      no-results-text="Nenhum restaurante encontrado"
    >
      <template v-slot:item="{ item }">
        <tr @click="getRestaurantInfos(item)">
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
import AccountController from '../controllers/AccountsController'
import Load from '../components/loading'
export default {
  components: { 
    Load
  },
  created(){
     this.account = JSON.parse(localStorage.getItem('LoggedAccount_city'))
     this.city = this.account.address;
     this.NearbyRestaurants()
  },
  data() {
    return {
      id: null,
      loading: false,
      accountController: new AccountController(),
      account : null,
      city: null,
      restaurants:[],
      headers: [
        { text: "Nome", value: "name" },
        { text: "Categoria", value: "category" },
      ],
    };
  },
    methods: {
    async NearbyRestaurants(){
    this.loading = true;
    this.restaurants = await this.accountController.getNearbyRestaurants(this.city);
    this.restaurants = this.restaurants.data
    this.loading = false;
    },
    back(){
      this.$router.push({ name: 'Home' })
    },
    getRestaurantInfos(item){
         this.$router.push({ name: 'Profile' , params:{account : item }})
    }
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