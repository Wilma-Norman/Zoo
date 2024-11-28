import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import { mammalsData } from './DataCategoy/animalCategory.jsx'
import { birdData } from './DataCategoy/animalCategory.jsx'
import { reptileData } from './DataCategoy/animalCategory.jsx'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Navigation from './Components/Navigation'
import Animals from '../src/Components/pages/animals.jsx'
import Footer from './Components/Footer'


const App = () => {
  const [activeCategory, setActiveCategory] = useState('Home');

    const section = {
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems: "flex-start",
    }

  return (
    <>
    <Header />
        <Navigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <div style={section}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mammals" element={<Animals animalData={mammalsData}/>}/>
            <Route path="/birds" element={<Animals animalData={birdData} />} />
            <Route path="/reptiles" element={<Animals animalData={reptileData}/>} />
          </Routes>          
      </div>
    <Footer />
    </>
  );
};

export default App;











/*
function App() {
  const [active, setActive] = useState("Home"); 
  return (
    <>
      <Header />
      <Navigation navActive={active} navaSetActive={setActive}/>       
      {active === "Home" && <Home />} 
      {active === "Mammals" && <Mammals />}
      {active === "Cassowary" && <Cassowary />}
      {active === "Birds" && <Birds />}
      {active === "Reptiles" && <Reptiles />}
      <Footer />
      
    </>
  )
}

export default App

*/
