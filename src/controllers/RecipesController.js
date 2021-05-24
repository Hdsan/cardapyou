const axios = require("axios");
const url = "https://intense-mountain-11089.herokuapp.com/recipes";


export default class RecipesController {
  async GetRecipesbyId(id) {
    try {
        console.log(id,'s')
        return await axios.get(`${url}/${id}`);
      } catch (err) {
        return err;
      }

  }}