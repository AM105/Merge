import './App.css';
import MenFashion from './MenFashion/MenFashion';
import WomenFashion from './WomenFashion/WomenFashion';
import BeautyFashion from './BeautyFashion/BeautyFashion'
import HomeFashion from './HomeFashion/HomeFashion'
import Clothes from './Clothes/Clothes'
import {BrowserRouter, Route, Routes} from 'react-router-dom';



function App() {
  return (
    
   <>

   
   <BrowserRouter>



 
          <Routes>
       
      <Route  path='/' element={<WomenFashion/>}/>
      <Route  path='/Clothes' element={<Clothes/>}/>
      <Route  path='/MenFashion' element={<MenFashion/>}/>

      <Route path='/BeautyFashion' element={<BeautyFashion/>}/>
      <Route path='/HomeFashion' element={<HomeFashion/>}/>
     
      



          </Routes>
   </BrowserRouter>

     

   
   </>



  );
}

export default App;
