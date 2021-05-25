const axios = require("axios");
const url = "https://intense-mountain-11089.herokuapp.com/recipes";


export default class RecipesController {
  async GetRecipesbyId(id) {
    try {
        console.log(id,'recipeId')
        return await axios.get(`${url}/${id}`);
      } catch (err) {
        return err;
      }

  }
  async NewRecipe(newName,newPrice,newImg,RestId){
    try {
      let status = await axios.post(url,{
      name: newName,
      price: newPrice,
      Restaurant_id: RestId,
      img: newImg
      })
      console.log(status)
      return status
    } catch (err) {
      return err;
    }
  }

}