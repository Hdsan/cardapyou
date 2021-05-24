const axios = require("axios");
const url = "https://intense-mountain-11089.herokuapp.com/accounts";
const search = "https://intense-mountain-11089.herokuapp.com/search";

export default class AccountsController {
  async GetAccountInfo() {
    await axios
      .get(url)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  }
  async authUser(email, pass) {
    try {
      return await axios.get(`${url}/${email}/${pass}`);
    } catch (err) {
      return err;
    }
  }
  async getNearbyRestaurants(city) {
    try {
      return await axios.get(`${search}/${city}`);
    } catch (err) {
      return err;
    }

  }
  async createClient(user){
    console.log(user)
    await axios.post( url,{
      name: user.name,
      cpf: user.cpf,
      address: user.address,
      mail: user.mail,
      password: user.password,
      complement: user.complement,
      phone : user.phone,
      type: "client"
      })
  }
  async createRestaurant(user){
    await axios.post( url,{
    name: user.name,
    cnpj: user.cnpj,
    address: user.address,
    mail: user.mail,
    password: user.password,
    phone : user.phone,
    type: "restaurant"
    })
  }
}
