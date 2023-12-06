import { useState } from "react";
//  import  { getData } from '../db/data'
//  import data from '../db/data';

// import Navigation from "./Navigation/Nav";
import Navigation from "../ClothesNavigation/Nav";
import Products from "../ClothesProducts/Products";
import data from '../Clothesdb/data'
import products from '../Clothesdb/data'
import Recommended from "../ClothesRecommended/Recommended";
import Sidebar from "../ClothesSidbar/Sidebar";
import Card from "../Clothescomponent/Card";
 
// import Products from "./Products/Products";
// import products from "./db/data";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./Sidebar/Sidebar";
// import Card from "./components/Card";
import "./Clothes.css";
 import Data from "../Clothesdb/data";
// import data from "./db/data";


const PER_PAGE=10;
function Clothes() {

  //  const [page,setPage]=useState(1)
  //  const[limit,setlimit]=useState(20)
  const[currentPage,setCurrentPage]=useState(0)
 

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )

    );
  }

   function handlePageClick({selected:selectedPage}){
   console.log("selectedPage", selectedPage )
    setCurrentPage(selectedPage)

   }

   const offset=currentPage *PER_PAGE;

   const currentPageData=data
   .slice(offset,offset+PER_PAGE)
   .map((res,index)=> <div key={index} src={res.thumbnailUrl}/>)
   const pageCount=Math.ceil(Data.length/PER_PAGE);
   const result = filteredData(products, selectedCategory, query,pageCount); 

  return (
    <>

    <h1>Pigination</h1>
    {currentPageData}
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result}
      previousLabel={"previous"}
      nextLabel={"next"}
      
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      previousLinkClassName={"pagination_Link"}
      nextLinkClassName={"pagination_Link"}
      disableClassName={"pagination_Link-disable"}
      activeClassName={"pagination_Link-active"}
      
      />

      
    </>
  );
}

export default Clothes;
