
import Menu from "./componant/menu";
import About from "./componant/About";
import Footer from "./componant/footer";
import Home from "./componant/Home";
import VehicleList from "./componant/VehicleList";
import AddVehicle from "./componant/AddVehicle";
import { Route,Routes } from "react-router-dom";
import UpdateVehicle from "./componant/UpdateVehicle";

function App(){
  return (
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vehicles-list" element={<VehicleList/>}/>
      <Route path="/add-vehicle" element={(<AddVehicle/>)}/>
      <Route path="/update-vehicle/:id" element={<UpdateVehicle />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
