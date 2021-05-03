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
          {{ user.location }}
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex> {{ user.type }} <v-icon>mdi-food-variant</v-icon> </v-flex>
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
          <div class="foodTitle">{{ item.title }}</div>
          <div class="subtitle">{{ item.preco }} R$</div>
        </v-layout>
        <v-text-field
          label="Total"
          type="number"
          v-model="item.total"
          class="total"
        ></v-text-field>
      </v-card>
    </v-container>
    <v-btn @click="cart=true">
      <v-icon>mdi-cart</v-icon>
      Carrinho
    </v-btn>

    <v-dialog v-model="cart" max-width="500px">
      <v-card>
        <v-list>
            <div class="title">
           Carrinho
            </div>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in cartList" :key="i">
                <div>

              <v-list-item-content>
                <v-list-item-title >
                    {{item.name}}
                    {{item.preco}} R$
                </v-list-item-title>
              </v-list-item-content>
                </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        Total: 40 R$
        <div>
        <v-btn class="finish-btn" @click="cart = false">Concluir</v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  created() {
    this.getRestaurantInfos();
    this.getFoodInfos();
  },
  methods: {
    getRestaurantInfos() {
      let id = this.$route.params.id;
      this.userDatabase.forEach((element) => {
        if (element.id == id) {
          this.user = element;
        }
      });
    },
    getFoodInfos() {
      let id = this.$route.params.id;
      this.foodDatabase.forEach((element) => {
        if (element.userId == id) {
          this.foods.push(element);
        }
      });
    },
    back() {
      this.$router.push({ name: "Map" });
    },
  },
  data() {
    return {
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
      userDatabase: [
        {
          id: "1",
          name: "Batatony's",
          img: "https://i.imgur.com/YNAiIRm.png",
          location: "Centro, Gotham",
          deliver: true,
          type: "Lanches",
          rating: 5,
        },
        {
          id: "2",
          name: "Churrasco vegano",
          img: "https://i.imgur.com/Bvsx5il.jpg",
          location: "Chinatown",
          deliver: false,
          type: "Saladas",
          rating: 4,
        },
        {
          id: "3",
          name: "Burguer Queen",
          img: "https://i.imgur.com/LgMUpbU.jpg",
          location: "Belo Horizonte",
          deliver: true,
          type: "Lanches",
          rating: 5,
        },
      ],
      foodDatabase: [
        {
          id: "1",
          userId: "1",
          title: "Burgão",
          img: "https://i.imgur.com/LgMUpbU.jpg",
          preco: "20,00",
        },
        {
          id: "2",
          userId: "1",
          title: "Combo Burguer",
          img: "https://i.imgur.com/3Jcy5WC.jpg",
          preco: "30,00",
        },
        {
          id: "3",
          userId: "2",
          title: "Salada",
          img: "https://i.imgur.com/KRUQ2kE.jpg",
          preco: "10,00",
        },
        {
          id: "4",
          userId: "3",
          title: "Hamburguer",
          img: "https://i.imgur.com/LgMUpbU.jpg",
          preco: "25,00",
        },
      ],
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