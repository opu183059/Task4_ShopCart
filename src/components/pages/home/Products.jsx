import { useContext } from "react";

import Card from "./card/Card";
import { ProviderContext } from "../../provider/Provider";

const Products = () => {
  const { products } = useContext(ProviderContext);

  return (
    <div id="products" className="max-w-6xl mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-7 px-5 md:px-0 py-5">
        {products.map((product) => (
          <Card key={product.id} product={product}></Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
