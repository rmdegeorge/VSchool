import React from 'react';

// Component
import Product from './product/Product.js';

// CSS style
import '../../../styles/ProductList.css';

function ProductList() {
  return (
    <div className="product-list-container">  
      <h2>This is our Crap!</h2>
      <h2>Buy it now!</h2>
      <div className="product-list">
        <Product title={"I'm Product 1!"} description={"This is a product description! It's descriptive."} imgSRC={"http://geniusvets.s3.amazonaws.com/gv-dog-breeds/siberian-husky-1.jpg"} imgAlt={"Picture of Husky"}/>
        <Product title={"I'm Product 2!"} description={"This is another product description! It's descriptive."} imgSRC={"https://www.guidedogs.org/wp-content/uploads/2019/08/website-donate-mobile.jpg"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 3!"} description={"This is yet another product description! It's descriptive."} imgSRC={"https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 4!"} description={"This is also product description! It's descriptive."} imgSRC={"https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 5!"} description={"This is the product description! It's descriptive."} imgSRC={"https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 6!"} description={"This is the next product description! It's descriptive."} imgSRC={"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/04/13/istock-1031307988.jpg?w968"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 7!"} description={"This is the product description! It's descriptive."} imgSRC={"https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Pomeranian_01.jpg?bust=1538074638&width=290"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 8!"} description={"This is the product description! It's descriptive."} imgSRC={"https://pixel.nymag.com/imgs/fashion/daily/2019/06/18/18-puppy-dog-eyes.w700.h700.jpg"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 9!"} description={"This is the product description! It's descriptive."} imgSRC={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-dog-breeds-lead-1550631680.jpg?crop=0.669xw:1.00xh;0.220xw,0&resize=640:*"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 10!"} description={"This is the product description! It's descriptive."} imgSRC={"https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/15/17/pixel-dogsofinstagram-3-15-19.jpg"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 11!"} description={"This is the product description! It's descriptive."} imgSRC={"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13002253/GettyImages-521536928-_1_.jpg"} imgAlt={"Picture of a dog"} />
        <Product title={"I'm Product 12!"} description={"This is the product description! It's descriptive."} imgSRC={"https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1477,w_2626,x_0,y_106/dpr_1.5/c_limit,w_608/fl_lossy,q_auto/v1556051126/RTR26G5Q_wbbe0x"} imgAlt={"Picture of a dog"} />
      </div>
    </div>
  );
}

export default ProductList;