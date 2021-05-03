<template>
  <div>
    <v-card>
      <img src="https://i.imgur.com/s53kZUo.png" id="banner" />
      <img src="https://i.imgur.com/YNAiIRm.png" height="100px" id="avatar" />

      <v-btn icon id="back-btn" x-large @click="back()">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>

      <v-layout>
        <v-flex id="name"> Batatony's </v-flex>
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
          Centro, Gotham
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
        <v-icon>mdi-lead-pencil</v-icon>
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
            <v-text-field label="Nome"></v-text-field>
            <v-text-field label="Preço" type="number"></v-text-field>
            <div>
              <v-file-input chips label="Imagem do prato"></v-file-input>
            </div>
          </v-layout>
        </v-card-title>
        <v-btn class="finish-btn" @click="add = false">Concluir</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      add: false,
      user: {
        id: "1",
        name: "Batatony's",
        img: "https://i.imgur.com/YNAiIRm.png",
        location: "Centro, Gotham",
        deliver: true,
        type: "Lanches",
        rating: 5,
      },
      foods: [
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
      ],
    };
  },
  methods: {
      back() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
