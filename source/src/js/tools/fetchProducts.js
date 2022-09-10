// Globals
import {GLOBALS} from 'js/Globals';

export default async function fetchProducts(category = "all"){
  const query = `
{category(input: { title: "${category}" }){
  products {
    id brand name description gallery category

    attributes {
      id name type
      items { displayValue value id }

    }

    prices {
      currency { label symbol }
      amount

    }

  }
}}
  `;

  const init = {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },

    body: JSON.stringify({query})
  }

  try{
    const response = await fetch(`${GLOBALS.database.URL}:${GLOBALS.database.PORT}/${GLOBALS.database.endPoint}`, init);
    const data = await response.json();
    return data.data.category.products;

  }catch(error){
    console.log(error);

  }

}
