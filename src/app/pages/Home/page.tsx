import Style from './home.module.css'
import { LuShoppingCart } from 'react-icons/lu'
import Link from 'next/link'
 const Home = () => {
  return (
    <div className={Style.home}>
      <div className={Style.contents}>
      <div className={Style.content1}>
      <div className={Style.col1}>
      <button className={Style.saleBtn}>Sale 70%</button>
      <h1>An Industrial Take on Streetwear</h1>
      <p>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
      <Link href={'/all_products'}><button className={Style.shopingBtn}>
<LuShoppingCart size={20}/>
        Start Shopping
        </button></Link>
        <div className={Style.logoPics}>
          <div className={Style.logoRow1}>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero1.66abddd4.png&w=96&q=75' alt='Loading...'></img>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero2.247cd605.png&w=96&q=75' alt='Loading...'></img>
          </div>
          <div className={Style.logoRow2}>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero3.6076521d.png&w=96&q=75' alt='Loading...'></img>
          <img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero4.0489f1fc.png&w=96&q=75' alt='Loading...'></img>
          </div>
        </div>
      </div>
    <div className={Style.col2}><img src='/assets/images/homepic.png' alt='Loading...'></img></div>
      </div>
      <div className={Style.content2}>
        <p className={Style.promoHead}>PROMOTIONS</p>
        <h2>Our Promotions Events</h2>
        <div className={Style.promoPics}>
          <div className={Style.col1}>
            <div className={Style.card1}>
            <div className={Style.content}>
            <h4>GET UP TO 60%</h4>
            <p>For the summer season</p>
            </div>
           <div className={Style.card1Pic}><img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromotion1.6f776995.png&w=384&q=75' alt='Loading...'></img></div> 
            </div>
            <div className={Style.subCard1}>
              <div>
              <h2>GET 30% Off</h2>
              <p>USE PROMO CODE</p>
              <button>DINEWEEKENDSALE</button>
              </div>
            </div>
          </div>
          <div className={Style.col2}>
          <div className={Style.card2}>
            <div className={Style.content}>
              <div>
              <p>Flex Sweatshirt</p>
              <div className={Style.prices}>
              <p className={Style.cardPrice}>$100.00</p>
              <p className={Style.cardPrice2}>$75.00</p>
              </div>
              </div>
            </div>
            <div className={Style.cardPic}><img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromotion2.b5f201ac.png&w=384&q=75' alt='Loading...'></img></div>
          </div>
          <div className={Style.card3}>
            <div className={Style.content}>
              <div>
              <p>Flex Push Button Bomber</p>
              <div className={Style.prices}>
              <p className={Style.cardPrice}>$225.00</p>
              <p className={Style.cardPrice2}>$190.00</p>
              </div>
              </div>
            </div>
            <div className={Style.cardPic}><img src='https://hackathon-dine-market.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpromotion3.798fa92b.png&w=384&q=75' alt='Loading...'></img></div>
          </div>
          </div>
        </div>
      </div>
      <div className={Style.content3}>
      <p className={Style.promoHead}>PRODUCTS</p>
        <h2>Check What We Have</h2>
        <div className={Style.pics}>
          <div className={Style.pic1}>
          <img src='/assets/images/black.jpg' alt='Loading...'></img>
          <p className={Style.name}>Brushed Raglan Sweatshirt</p>
          <p className={Style.price}>$195</p>
          </div>
          <div className={Style.pic2}>
          <img src='/assets/images/skin.jpg' alt='Loading...'></img>
          <p className={Style.name}>Cameryn Sash Tie Dress</p>
          <p className={Style.price}>$545</p>
          </div>
          <div className={Style.pic3}>
          <img src='/assets/images/hat.jpg' alt='Loading...'></img>
          <p className={Style.name}>Flex Sweatshirt</p>
          <p className={Style.price}>$175</p>
          </div>
        </div>
      </div>
      <div className={Style.content4}>
        <div className={Style.head}>
       <h2>Unique and Authentic Vintage Designer Jewellery</h2>
       </div>
       <div className={Style.content}>
<div className={Style.col1}>
  <h1>Different from others</h1>
  <div className={Style.row1}>
    <div>
      <h4>Using Good Quality Materials</h4>
      <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
    <div className={Style.row1Head2}>
      <h4>Using Good Quality Materials</h4>
      <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
  </div>
  <div className={Style.row2}>
    <div>
      <h4>Modern Fashion Design</h4>
      <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
    <div className={Style.row2Head2}>
      <h4>Discount for Bulk Orders</h4>
      <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>
<div className={Style.col2}>
  <div className={Style.col2Pic}><img src='/assets/images/princess.jpg'></img></div>
  <div className={Style.col2Content}>
    <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
    <Link href={'/all_products'}><button>See All Product</button></Link>
    </div>
</div>
       </div>
      </div>
      <div className={Style.content5}>
      <h1>Newsletter</h1>
        <div className={Style.content}>
          <h4>Subscribe Our Newsletter</h4>
          <p>Get the latest information and promo offers directly</p>
          <div className={Style.email}>
            <input placeholder='Email' type='email' size={25} maxLength={30}></input>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Home;