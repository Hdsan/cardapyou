<template>
  <div>
      <img<img id="background" src="../assets/back-image.png" alt="img" />
    <v-container id="container">
      <v-layout column class="layout-home">
        
        <v-btn height="70px" rounded 
        @click="toLogin('restaurante')"
        class="sign-btn">Login</v-btn>
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
    toLogin(){
      this.$router.push({ name: 'Login' })
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
  margin-top: 10% !important;
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