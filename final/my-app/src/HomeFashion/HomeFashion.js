import './HomeFashion.css';
import { Link } from 'react-router-dom';
 import img1 from "../image/1.jpg";
 import img2 from "../image/2.png";
 import img3 from "../image/3.jpg";
 import img4 from "../image/4.jpg";
 import img5 from "../image/5.jpg";
 import img6 from "../image/6.jpg";
 import img7 from "../image/7.jpg";
 import img8 from "../image/8.jpg";
import Home from '../Home/Home';

function HomeFashion() {
    return (
        <>
     <section>
     <div className="main-wrapper">
    <nav className="navbar navbar-expand-lg" >
      <div className="brand-and-icon">
        <a href="index.html" className="navbar-brand">ESHOP</a>
        <button type="button" className="navbar-toggler">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div className="navbar-collapse">
        <ul className="navbar-nav">
          {/* <li>
            <a className="menu-link" href="#">home</a>
          </li> */}

          <li>
            {/* <a href="/my-app/src/WomenFashion/WomenFashion.js" className="menu-link"> */}
            <Link to="/"> Women's Fashion</Link>
            {/* Women's Fashion */}
              
            {/* </a> */}
            <div className="sub-menu">

              {/* <!-- item --> */}

              <div className="sub-menu-item">
                <h4>All Product & Trends</h4>
                <ul>


                  <li><a href="#">Clothes</a></li>
                  <li><a href="#">Shoes</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Luxury Loft</a></li>
                  <li><a href="#">Premium Loft</a></li>
                  <li><a href="#">Brands</a></li>
                  <li><a href="#">Store</a></li>
                  <li><a href="#">Magzaine</a></li>
                </ul>
              </div>

              {/* <!-- end of item --> */}
              {/* <!-- item --> */}

              <div className="sub-menu-item">
                <h4>other categories</h4>
                <ul>
                  <li><a href="#">Dress</a></li>
                  <li><a href="#">Sandels</a></li>
                  <li><a href="#">watch</a></li>
                  <li><a href="#">Glasses</a></li>
                  <li><a href="#">Bages</a></li>
                  <li><a href="#">Blouses</a></li>
                  <li><a href="#">Swimmwear</a></li>
                  <li><a href="#">Belts</a></li>
                  <li><a href="#">Scarves</a></li>

                </ul>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <img src={img1} alt=''></img>
                <h2>all essential devices and tools for home</h2>
                <button type="button" className="btn">shop here</button>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <img  src={img2} alt=""/>
                {/* <h2>all essential devices and tools for home</h2>
                <button type="button" className="btn">shop here</button> */}
              </div>
              {/* <!-- end of item --> */}
            </div>
          </li>

          <li>
          <Link to="/MenFashion"> Men's Fashion</Link>
            {/* <a href="/my-app//src/MenFashion" className="menu-link">
              Men's Fashion
            
            </a> */}
            <div className="sub-menu">
              {/* <!-- item --> */}
              <div className="sub-menu-item">
                <h4>top categories</h4>
                <ul>
       
                <li><a href="#">Clothes</a></li>
                  <li><a href="#">Shoes</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Luxury Loft</a></li>
                  <li><a href="#">Premium Loft</a></li>
                  <li><a href="#">Brands</a></li>
                  <li><a href="#">Store</a></li>
                  <li><a href="#">Magzaine</a></li>
                </ul>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <h4>other categories</h4>
                <ul>
                <li><a href="#">Shoes</a></li>
                  <li><a href="#">Shirts</a></li>
                  <li><a href="#">Pants</a></li>
                  <li><a href="#">Glasses</a></li>
                  <li><a href="#">Bages</a></li>
                  <li><a href="#">jackets</a></li>
                  <li><a href="#">Swimmwear</a></li>
                  <li><a href="#">Belts</a></li>
                  <li><a href="#">Lockets</a></li>
                </ul>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <img src={img3}></img>
                <h2>stylish and modern fashion clothing</h2>
                <button type="button" class="btn">shop here</button>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <img  src={img4} alt=""/>
                

              </div>
              {/* <!-- end of item --> */}

            </div>
          </li>


          <li>
          <Link to="/BeautyFashion">Beauty</Link>
            {/* <a href="#" className="menu-link">
               Beauty
            </a> */}
            <div className="sub-menu">
              {/* <!-- item --> */}
              <div className="sub-menu-item">
                <h4>top categories</h4>
                <ul>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skin-care</a></li>
                  <li><a href="#">Perfume</a></li>
                  <li><a href="#">hair care & stylings</a></li>
                  <li><a href="#">Wellness Product</a></li>
                  <li><a href="#">SunScreen</a></li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Brands</a></li>
                  <li><a href="#">Store</a></li>
                  <li><a href="#">Magzaine</a></li>
                  

                </ul>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <h4>other categories</h4>
                <ul>
                  <li><a href="#">Foundation</a></li>
                  <li><a href="#">Brashes</a></li>
                  <li><a href="#">Sun cream</a></li>
                  <li><a href="#">oral care</a></li>
                  <li><a href="#">Shampoo</a></li>
                  <li><a href="#">Soap</a></li>
                  <li><a href="#">Perfume</a></li>
                  <li><a href="#">lip oil</a></li>
                  <li><a href="#">oral care</a></li>
                  <li><a href="#">Shampoo</a></li>
                </ul>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
              <img src={img5} alt=""/>
                <h2>the latest product is here</h2>
                <button type="button" className="btn">shop here</button>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <img src={img6} alt=""/>
              </div>
              {/* <!-- end of item --> */}
            </div>
          </li>

          <li>

          <Link to="/HomeFashion">Home</Link>
            {/* <a href="#" className="menu-link">
              Home
           
            </a> */}
            <div class="sub-menu">

              {/* <!-- item --> */}

              <div className="sub-menu-item">
                <h4>top categories</h4>
                <ul>
                  <li><a href="#">Living Room</a></li>
                  <li><a href="#">Bedroom</a></li>
                  <li><a href="#">kitchen</a></li>
                  <li><a href="#">Furniture</a></li>
                  <li><a href="#">Lamps</a></li>
                  <li><a href="#">Home Accessories</a></li>
                  <li><a href="#">Sales</a></li>
                  <li><a href="#">Brands</a></li>
                  <li><a href="#">Store</a></li>
                  <li><a href="#">Magzaine</a></li>
                </ul>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <h4>other categories</h4>
                <ul>
                  <li><a href="#">Furniture</a></li>
                  <li><a href="#">Lamps</a></li>
                  <li><a href="#">Home Accessories</a></li>
                  <li><a href="#">Beds</a></li>
                  <li><a href="#">Table</a></li>
                  <li><a href="#">Sofas</a></li>
                  <li><a href="#">TV Cabinates</a></li>
                  
                  <li><a href="#">Coat Reack</a></li>
                  <li><a href="#">Bathroom Accessories</a></li>
                  <li><a href="#">Seating</a></li>
                </ul>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
              <img className="living"src={img7} alt=""/>
                <h2>gear up for sports & adventures</h2>
                <button type="button" className="btn">shop here</button>
              </div>
              {/* <!-- end of item -->
              <!-- item --> */}
              <div className="sub-menu-item">
                <img  className ="for"src={img8} alt=""/>
              </div>
              {/* <!-- end of item --> */}
            </div>
          </li>
{/* 
          <li>
            <a className="menu-link" href="#">deals</a>
          </li> */}
        </ul>
      </div>
    </nav>
  </div>
     </section>
       
<section>

  <Home/>
</section>
            
      <section>
      <footer className="py-5">
    <div className="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
        </ul>
      </div>

      
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.  </p>
    
 
    </div>
    
  </footer>
 
 
      </section>





        </>
    )
}

export default HomeFashion;