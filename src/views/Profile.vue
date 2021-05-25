<template>
  <div>
    <v-card>
      <img src="https://i.imgur.com/s53kZUo.png" id="banner" />
      <img :src="user.img" height="100px" id="avatar" />

      <v-btn icon id="back-btn" x-large @click="back()">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>

      <v-layout>
        <v-flex id="name">
          {{ user.name }}
        </v-flex>
        <v-flex>
          <v-rating
            :value="user.rating"
            readonly
            color="yellow"
            small
          ></v-rating>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-icon>mdi-map-marker</v-icon>
          {{ user.address }}
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex> {{ user.category }} <v-icon>mdi-food-variant</v-icon> </v-flex>
        <v-flex v-if="user.deliver">
          <v-icon>mdi-moped</v-icon> deliver
          <v-icon class="icon-green">mdi-check</v-icon>
        </v-flex>
      </v-layout>
    </v-card>
    <v-container>
      <div class="title">Cardápio</div>
      <v-card class="foodCard" v-for="item in foods" :key="item.id">
        <img
          :src="item.img"
          height="90px"
          width="130px"
          alt="img"
          class="image"
        />
        <v-layout column>
          <div class="foodTitle">{{ item.name }}</div>
          <div class="subtitle">{{ item.price }} R$</div>
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import RecipesController from "../controllers/RecipesController";
import AccountController from "../controllers/AccountsController";
export default {
   async created() {
    let mail = this.$route.params.account.mail;
    console.log(mail,"mail")
    this.user = await this.accountController.getUserByEmail(mail);
    this.user = this.user.data
    console.log(this.user,'user')
    this.foods = await this.recipeController.GetRecipesbyId(this.user._id);
    this.foods = this.foods.data
     console.log(this.foods,'foods')
    
    this.getFoodInfos();
  },
  methods: {
    
    
    getFoodInfos() {
     

    },
    back() {
      this.$router.push({ name: "Map" });
    },
  },
  data() {
    return {
      recipeController: new RecipesController(),
      accountController: new AccountController(),
      cart: false,
      cartList: [
        {
          name: "Burgão",
          preco: '30,00',
        },
        {
          name: "Salada",
          preco: '10,50',
        },
      ],
      user: {},
      foods: [],
    };
  },
};
</script>
<style>
.cart-icon {
  position: absolute !important;
  right: 10px;
}
.foodCard {
  margin-top: 5%;
  height: 100px;
}
.image {
  position: absolute;
  left: 0;
  top: 0;
}
.icon-green {
  color: green !important;
}
#banner {
  width: 100%;
}
#name {
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
#avatar {
  position: absolute;
  top: 0%;
  left: 40%;
  width: 25%;
}
.foodTitle {
  padding-left: 15%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
}
.subtitle {
  padding-top: 10px;
  font-size: 25px;
  padding-left: 15%;
}
.total {
  padding-left: 75%;
  padding-top: 0;
}
.finish-btn{
    background-color: #08cf105e !important;
    margin-bottom: 20px;
    margin-top: 20px;
}
</style>