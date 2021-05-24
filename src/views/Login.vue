<template>
  <div>
    <Load
    :active = loading
    ></Load>
    <img id="background" src="../assets/back-image.png" alt="img"/>
    <v-container> 
    <v-btn icon id="back-btn" 
     x-large @click="back()">
      <v-icon>mdi-keyboard-backspace</v-icon>
       </v-btn>    
      <v-layout column class="Loginlayout">
        <p class="title">
       
        </p>
        <v-text-field
          v-model="email"
          label="E-mail"
          rounded
          outlined
          append-icon="mdi-email-variant"
        ></v-text-field>
     
        <v-text-field
          rounded
          v-model="password"
          label="Senha"
          outlined
          append-icon="mdi-key-outline"
        ></v-text-field>

        <v-btn width="90%" rounded
        @click="validate()"
        class="sign-btn">Login</v-btn>
        
      </v-layout>
        
    </v-container>
  </div>
</template>
<script>
import AccountsController from '../controllers/AccountsController.js'
import Load from '../components/loading'
export default {
  name: "Login",
  components: { 
    Load
  },

   data() {
    return {
      accountController: new AccountsController(),
      email: null,
      password: null,
      loading: false
    }
     },
     created(){

     },
  methods:{
    async validate(){
      let email = this.email;
      let pass = this.password;
      try{

        this.loading = true;
      const accountStat = await this.accountController.authUser(email,pass)
      if(accountStat.data.ok){
        let account = accountStat.data;        
        localStorage.setItem('LoggedAccount_city', JSON.stringify(account.data));
        if(account.data.type == 'client'){
          this.$router.push({ name: 'Map'})
        }
        else{
          this.$router.push({ name: 'Dashboard'})
        }
      }
      else{
        this.loading = false
       console.log(accountStat)
      }
        }
        catch(err){
          this.loading = false
        }
        
    },
    back(){
      this.$router.push({ name: 'Home' })
    }
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