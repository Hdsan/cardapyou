<template>
  <div>
    <v-card>
       <img src="https://i.imgur.com/s53kZUo.png" id="banner" />
      <img src="https://i.imgur.com/YNAiIRm.png" height="100px" id="avatar" />

      <v-btn icon id="back-btn" x-large @click="back()">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>

      <v-layout>
        <v-flex id="name">{{ user.name }} </v-flex>
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
        <v-flex> Lanches <v-icon>mdi-food-variant</v-icon> </v-flex>
        <v-flex>
          <v-icon>mdi-moped</v-icon> deliver
          <v-icon class="icon-green">mdi-check</v-icon>
        </v-flex>
      </v-layout>
    </v-card>
    <v-container>
      <div class="title">Cardápio</div>
      <v-card class="foodCard" v-for="item in foods" :key="item.name">
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
    <v-btn @click="add = true">
      <v-icon>mdi-pen-plus</v-icon>
      Adicionar prato
    </v-btn>

    <v-dialog v-model="add" max-width="500px">
      <v-card>
        <div class="title">Novo prato</div>
        <v-card-title>
          <v-layout column>
            <v-text-field label="Nome"
            v-model="newRecipeName"></v-text-field>
            <v-text-field label="Preço" type="number" v-model="newRecipePrice"></v-text-field>
            <div>
              <v-text-field chips label="Imagem do prato" v-model="newRecipeImg"></v-text-field>
            </div>
          </v-layout>
        </v-card-title>
        <v-btn class="finish-btn" @click="newRecipe (),add = false">Concluir</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import RecipesController from "../controllers/RecipesController";
export default {
  created() {
    this.user = JSON.parse(localStorage.getItem("LoggedAccount_city"));
    this.getRecipes();
    console.log(this.foods)
  },
  data() {
    return {
      recipeController: new RecipesController(),
      account: null,
      add: false,
      user: {},
      newRecipePrice: null,
      newRecipeName: null,
      newRecipeImg: null,
      foods: [],
    };
  },
  methods: {
    async getRecipes() {
      this.foods = await this.recipeController.GetRecipesbyId(this.user._id);
     this.foods = this.foods.data;
    },
    async newRecipe(){
      let x = await this.recipeController
      .NewRecipe(this.newRecipeName,this.newRecipePrice,this.newRecipeImg,this.user._id);
      this.getRecipes()
    },
    back() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
