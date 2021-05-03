<template>
  <div>
      <img<img id="background" src="../assets/back-image.png" alt="img" />
    <v-container id="container">
      <v-layout column class="layout-home">
      <p id="title">Deseja acessar como um:</p>
        <v-btn height="70px" rounded 
        @click="toLogin('usuário')"
        class="sign-btn">Usuário</v-btn>
        <v-btn height="70px" rounded 
        @click="toLogin('restaurante')"
        class="sign-btn">Restaurante</v-btn>
        <v-layout column>
        <v-btn  rounded
        @click="SignUp"
        class="sign-btn">Quero me cadastrar
        </v-btn>
        </v-layout>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  components: {},
  methods:{
    toLogin(type){
      this.$router.push({ name: 'Login' ,params:{clientType : type }})
    },
    SignUp(){
      this.$router.push({ name: 'Signup'})
    }
  }
};
</script>
<style>
.sign-btn {
  width: 90%;
  background: #08cf105e !important;
  font-size: 18px !important;
  font-weight: 500 !important;
}
#background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 105%;
}
.container {

}
#title{
  font-size: 22px;
  font-weight: 600;
  font-family: sans-serif;
  color: white;
  z-index: 1;
}
.layout-home{
  padding-top: 20%;
}
</style>