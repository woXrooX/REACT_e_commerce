// Globals
import {GLOBALS} from 'js/Globals';

export default async function fetchProduct(id){
  const query = `
query fetchProductById {
  product(id: "${id}"){
    brand name description inStock gallery

    attributes{
      id name type

      items{id displayValue value}

    }

    prices{
      currency{label symbol}

      amount

    }

  }

}
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
    return data.data.product;

  }catch(error){
    console.log(error);

  }

}
