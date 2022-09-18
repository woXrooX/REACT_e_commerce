// Globals
import {GLOBALS} from 'js/Globals';

export default async function fetchProduct(id){
  const query = `
query fetchCurrencies{
  currencies{
    label symbol
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
    return data.data.currencies;

  }catch(error){
    console.log(error);

  }

}
