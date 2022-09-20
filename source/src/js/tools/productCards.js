// Components
import ProductCard from 'js/components/ProductCard';

export default function productCards(products = null, currentCurrency){
  if(products == null) return;

  let cards = [];

  for(const product of products){
    cards.push(
      <ProductCard
        key={product.id}
        product={product}
        getCurrentCurrency={currentCurrency}
      />
    );
  }

  return cards;

}
