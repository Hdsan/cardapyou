<template>
  <div id="animation">
    <alert :show='alert.show' :title="alert.title" 
      :message="alert.message"  ></alert>
      <v-btn icon id="back-btn-s" 
     x-large @click="back()">
      <v-icon>mdi-keyboard-backspace</v-icon>
       </v-btn>    

    <v-container class="signContainer">
      <div class="title">
        Cadastro
      </div>
      <v-tabs
      v-model="type"
      class="tabs"
    >
      <v-tab>
        Usuário
      </v-tab>
      <v-tab>
        Restaurante
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="type">
      <v-tab-item>
       <v-text-field 
       label="Nome do usuário" 
       :rules="[rules.required]"
       v-model="user.name"></v-text-field>
      <v-text-field
        label="CPF"
        v-mask="'###.###.###-##'"
        v-model="user.cpf"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field label="Endereço" v-model="user.address"></v-text-field>
        <v-text-field
          label="Email"
          v-model="user.mail"
          :rules="[rules.mail,rules.required]"
      ></v-text-field>
      <v-text-field
        label="Complemento (opcional)"
        v-model="user.complement"
      ></v-text-field>
      <v-text-field
        label="Telefone (opcional)"
        v-mask="'(##)#####-####'"
        v-model="user.phone"
        
      ></v-text-field>
       
      </v-tab-item>
      <v-tab-item>
        <v-text-field
        label="Nome do Restaurante"
        v-model="restaurant.name"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        label="CNPJ"
        v-mask="'###.###.###/####-##'"
        v-model="restaurant.cnpj"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
          label="Email"
          v-model="restaurant.mail"
          :rules="[rules.mail,rules.required]"
      ></v-text-field>
      <v-text-field
        label="Endereço"
        v-model="restaurant.address"
        :rules="[rules.required]"
      ></v-text-field>
      <v-text-field
        label="Telefone"
        v-mask="'(##)#####-####'"
        v-model="restaurant.phone"
        :rules="[rules.required]"
      ></v-text-field>
      </v-tab-item>
    </v-tabs-items>
    <v-checkbox color="green"
    label="li e concordo com as letras pequenas" v-model="terms"></v-checkbox>
    <v-btn id="confirmSignup" 
    @click="signUp()"
    :disabled="!terms">cadastrar</v-btn>
    </v-container>

  </div>
</template>
<script>
import ClientController from '../controllers/AccountsController'
import alert from '../components/alert'
export default {
    components: { 
    alert
    },
  data() {
    return {
      clientController: new ClientController(),
      terms: false,
      type: null,
      alert: {
          title: "",
          message:"",
          show: false
      },
      user: {},
      restaurant: {},
      rules: {
        required: value => !!value || "Campo Obrigatório",
        mail: v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido'
      },
    };
  },
  methods:{
      back(){
          this.$router.push({ name: 'Home' })
      },
      setAlert(){
          this.alert.title = "Cadastro efetuado!"
          this.alert.message = "Seu cadastro foi efetuado com sucesso! redirecionando pra tela de login"
          this.alert.show = true
      },
      signUp(){
        if(this.type === 0){
          this.clientController.createClient(this.user);
        }
        else{
          this.clientController.createRestaurant(this.restaurant);
        }
      }
  }
};
</script>
<style>

.title {
  padding-bottom: 20px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.747);
}
.signContainer{
   min-height: 100% !important;
   padding-top: 50px;
   animation: backAnimation 6s infinite;
}
#confirmSignup{
    background-color: rgb(93, 219, 93);
}
.tabs{
    color: green;
}
.v-input{
    color: green !important;
}
.v-messages{
    color: red !important;
}
#back-btn-s{
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>