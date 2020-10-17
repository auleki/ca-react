import React from 'react';
import './App.css';

function App() {
  return (

    <div>
    {/* Nav goes in here */}

    
        <header className="wow fadeInDownBig">
          {/* <div class="header"> */}
          {/* <div class="logo">
            <img src="images/CA Logo.png" alt="logo">
        </div> */}
          <div className="left">
            <h1>We are live!</h1>
            <div className="paras">
              <p>Place your orders now via Whatsapp</p>
              {/* <p class="center">OR</p> */}
              {/* <p>Win something by partaking in our giveaway quiz</p> */}
            </div>
            <div className="actions">
              <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi%20there%20Checkadigs,%20I'd%20love%20to%20make%20a%20purchase" className="order-button" target="_blank" rel="noreferrer">
                <span>Place Order</span><i className="lab la-whatsapp" />
              </a>
              <a href="./quiz.html" className="out-button">
                <span>Giveaway Quiz</span>
              </a>
            </div>
          </div>
          {/* <div class="right wow fadeInDownBig">
            
            <img src="images/CA Logo.png" alt="logo">
        </div>  */}
          {/* </div> */}
          <div className="point">
            <i id="word" className="las la-angle-double-down" />
          </div>
        </header>
        <main>
          {/* <section id="genesis" class="bg-left wow fadeInUpBig reverse">
           
       </section> */}
          <section id="genesis" className="wow fadeInUpBig category">
            <div className="title">
              <h2>Sweatshirts</h2> 
            </div>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <img src="images/sweat01-removebg.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N12,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20sweatshirt%20for%20N12,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/sweat02 1t.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N14,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20yellow%20sweatshirt%20for%20N14,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/sweat03 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N12,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20gray%20sweatshirt%20for%20N12,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/sweat04 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N12,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20light%20blue%20sweatshirt%20for%20N12,000" className="buy">BUY NOW</a>
              </div>  
              <div className="item">
                <img src="images/sweat05 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N11,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20white%20sweatshirt%20for%20N11,000" className="buy">BUY NOW</a>
              </div>
            </div>          
          </section>
          <section id="shorts" className="wow fadeInUpBig category">
            <div className="title">
              <h2>Shorts</h2>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <img src="images/short01 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20green%20shorts%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/short02 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20shorts%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/short03 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20hot%20pink%20shorts%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/short04 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20pink%20shorts%20for%20N10,000" className="buy">BUY NOW</a>
              </div>  
              <div className="item">
                <img src="images/short05 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20shorts%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
            </div>          
          </section>
          <section id="polos" className="category wow fadeInUpBig">
            <div className="title">
              <h2>Poloshirts</h2>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <img src="images/polo01 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N11,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20navy%20blue%20polo%20for%20N11,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/polo02 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N13,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20polo%20for%20N13,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/polo03 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N13,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20polo%20for%20N13,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/polo04 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N13,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20polo%20for%20N13,000" className="buy">BUY NOW</a>
              </div>  
              <div className="item">
                <img src="images/polo05 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N11,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20green%20polo%20for%20N11,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/polo06 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N11,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20white%20polo%20for%20N11,000" className="buy">BUY NOW</a>
              </div>
            </div>          
          </section>
          <section id="tShirt" className="category wow fadeInUpBig">
            <div className="title">
              <h2>T-Shirts</h2>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <img src="images/shirt01 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N14,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20white%20shirt%20for%20N14,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/shirt02 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20shirt%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/shirt03 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20white%20shirt%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/shirt04 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20red%20shirt%20for%20N10,000" className="buy">BUY NOW</a>
              </div>  
              <div className="item">
                <img src="images/shirt05 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20white%20shirt%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/shirt06 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N10,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20white%20shirt%20for%20N10,000" className="buy">BUY NOW</a>
              </div>
            </div>          
          </section>
          <section id="joggers" className="category wow fadeInUpBig">
            <div className="title">
              <h2>Joggers</h2>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="item">
                <img src="images/joggers01 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N11,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20black%20jogger%20for%20N11,000" className="buy">BUY NOW</a>
              </div>
              <div className="item">
                <img src="images/joggers02 1.png" alt="" srcSet />
                <span className="price"><ion-icon name="pricetags-outline" /> N11,000</span>
                <a href="https://api.whatsapp.com/send?phone=2348130267643&text=Hi,%20I%20want%20to%20buy%20the%20gray%20shirt%20for%20N11,000" className="buy">BUY NOW</a>
              </div>
            </div>          
          </section>
          {/* NEED TO FIX? */}
          <div className="about wow fadeInUpBig" id="aboutUs">
            <div className="title">
              <h2>About US</h2>
            </div>
            <div className="paras">
              <p>
                Check adigs brings to you her first T-shirt product which was designed and fabricated to suit
                your taste, with its novel wear which has been made to be suitable for all individual and for your
                favourite occasion.
              </p>
              <span>
                Looking for a perfect fit to wear?
              </span>
              <p>
                Our large variety of fabrics, colours and styles have you covered. Our main target is to make
                fashion accessible and affordable for everyone
              </p>
              <p>
                We are really excited and we can't wait to see you all look gorgeous in this highly quality fabrics
                and unique textures
              </p>
            </div>
          </div>
        </main>
        <div className="newsletter wow fadeInRightBig">
          <h3>Subscribe to get on our mailing list</h3>
          <div className="subscribe">
            <form id="subscribeForm">
              <div className="form_group">
                <span className="placeholder">@</span>
                <input type="email" name="email" id="email" placeholder="type in your email address" autoComplete="off" />
                <button type="submit" id="subscribeBtn" className="send"><ion-icon name="enter-outline" /></button>
              </div>
            </form>
            {/* <div class="submitted">
                <h3>Thanks for submitt</h3>
            </div> */}
            {/* <div class="form_group">
                <button type="submit"></button>
            </div> */}
          </div>
        </div>
        <footer className="wow fadeInUp">        
          <div className="icons">
            <a href="https://instagram.com/check_adigs" target="_blank" rel="noreferrer" className="links">
              <i className="lab la-instagram" />
            </a>
            <a href="https://twitter.com/check_adigs" target="_blank" rel="noreferrer" className="links">
              <i className="lab la-twitter" />
            </a>
            <a href="https://www.facebook.com/Check_adigs-109195790858649" target="_blank" rel="noreferrer" className="links">
              <i className="lab la-facebook-f" />
            </a>       
          </div>
          <div className="text">
            <p>Powered by <span>Check Adigs</span></p> 
            {/* <img src="images/CA Logo.png" alt="logo" srcset=""> */}
          </div>
          <div className="phone">
            <a className="links" href="tel:+2348130267643">
              <i className="las la-phone" /><span>+2348130267643</span>
            </a>
          </div>
        </footer>
       </div>
  );
}

export default App;
