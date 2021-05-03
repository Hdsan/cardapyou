<template>
  <div>
    <img id="background" src="../assets/back-image.png" alt="img"/>
    <v-container> 
    <v-btn icon id="back-btn" 
     x-large @click="back()">
      <v-icon>mdi-keyboard-backspace</v-icon>
       </v-btn>    
      <v-layout column class="Loginlayout">
        <p class="title">
        {{type}}
        </p>
        <v-text-field
          
          label="E-mail"
          rounded
          outlined
          append-icon="mdi-email-variant"
        ></v-text-field>
     
        <v-text-field
         type="password"
          rounded
          label="Senha"
          outlined
          append-icon="mdi-key-outline"
        ></v-text-field>

        <v-btn width="90%" rounded
        @click="login"
        class="sign-btn">Login</v-btn>
        
      </v-layout>
        
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
   data() {
    return {
      type : this.$route.params.clientType,
    }},
  methods:{
    back(){
      this.$router.push({ name: 'Home' })
    },
    login(){
      if(this.type == 'usuário'){
         this.$router.push({ name: 'Map' })
      }
      else{
        this.$router.push({ name: 'Dashboard' })
      }
    },

  }
};
</script>
<style >
.Loginlayout{
  align-items: center;
  padding-top: 40%;
}
.sign-btn {
  margin-top: 5%;
  width: 90%;
  color: white !important;
  padding-top: 10px;
  background: #08cf105e !important;
  font-size: 17px !important;
  font-weight: 600 !important;

}
#back-btn{
  position: absolute;
  left: 5%;
  top: 5%;
  color: white;
}
</style>