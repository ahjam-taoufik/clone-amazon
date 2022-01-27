import React from "react";
import "./Home.css";
import Product from "./../Product/Product";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <Header />
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
            <Product
              id="00145"
              title="this is Tittle of product tow"
              price={50}
              rating={2}
              image="https://resource.logitechg.com/w_460,c_limit,q_auto,f_auto,b_rgb:f4f4f4,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-hero.png?v=1"
            />
          </div>

          <div className="home__row">
            <Product
              id="123456"
              title="this is Tittle of product one"
              price={12.14}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_MwTpZRa0pw4ItA9rMmBmJRSYA0r2ZMX9lA&usqp=CAU"
            />
            <Product
              id="00145"
              title="this is Tittle of product tow"
              price={50}
              rating={2}
              image="https://resource.logitechg.com/w_460,c_limit,q_auto,f_auto,b_rgb:f4f4f4,dpr_2.0/d_transparent.gif/content/dam/gaming/en/products/refreshed-g203/g203-hero.png?v=1"
            />
            <Product
              id="00145"
              title="this is Tittle of product tow"
              price={50}
              rating={2}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUieXu8BLQzjem52_bV94_dOqC9Up3BQITw&usqp=CAU"
            />
          </div>
          <div className="home__row">
            <Product
              id="123456"
              title="this is Tittle of product one"
              price={12.14}
              rating={4}
              image="https://www.usinenouvelle.com/expo/img/mini-pc-industriel-embarque-durci-et-economique-nuvo-7501-series-011779725-product_zoom.jpg"
            />
            <Product
              id="00145"
              title="this is Tittle of product tow"
              price={50}
              rating={2}
              image="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/a/e/daedbc7758_50170718_2-lenovo-legion-y540-15irh.jpg"
            />
            <Product
              id="00145"
              title="this is Tittle of product tow"
              price={50}
              rating={2}
              image="data:image/jpeg;base64,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"
            />
            <Product
              id="00145"
              title="this is Tittle of product tow"
              price={50}
              rating={2}
              image="https://st.depositphotos.com/1835351/3065/i/600/depositphotos_30659679-stock-photo-power-desktop-pc.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
