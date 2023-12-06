// import { BsFillBagFill } from "react-icons/bs";
const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
    return (
      <>
      <div class="row row-md-12">
      <div class="col col-lg-12 col-md-9  col-sm-6">
        <section className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-reviews">
              {star} {star} {star} {star}
              <span className="total-reviews">{reviews}</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              {/* <div className="bag">
                <BsFillBagFill className="bag-icon" />
              </div> */}
            </section>
          </div>
        </section>
        </div>
        </div>
      
  
      </>
    );
  };
  
  export default Card;
  