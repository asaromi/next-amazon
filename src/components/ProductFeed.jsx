import React from 'react'
import Product from './Product'
import ProductLoader from './ProductLoader'

const ProductFeed = ({products = []}) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-5 md:-mt-52">
      {products.length > 0 && products.slice(0, 4).map(({id, title, price, description, category, image}) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      )) || Array.from({length: 4}).map((_, i) => (
        <ProductLoader key={i} />
      ))}

      <img
        className="w-full max-w-fhd md:col-span-full px-5"
        src="https://links.papareact.com/dyz"
        alt="banner"
      />

      {products.length > 0 && (
        <div className="md:col-span-2 h-full p-5 xl:p-0 -m-5 xl:m-0">
          {products.slice(4,5).map(({id, title, price, description, category, image}) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              isPrime={true}
            />
          ))}
        </div>
      )}

      {products.length > 0 && products.slice(5, products.length).map(({id, title, price, description, category, image}) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  )
}

export default ProductFeed
