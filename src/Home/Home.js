import React from "react";
import "./Home.css";
import Product from "./../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          //   src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="123456"
            title="this is Tittle of product one"
            price={12.14}
            rating={4}
            image="https://www.usinenouvelle.com/expo/img/mini-pc-industriel-embarque-durci-et-economique-nuvo-7501-series-011779725-product_zoom.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
