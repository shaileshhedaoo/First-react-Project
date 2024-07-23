import { useEffect , useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function VehicleList(){
    const [vehicles , setVehicles] = useState([]);
    const navigate = useNavigate();
               
    useEffect(()=>{
        fetchVehicles();
    },[])
    function fetchVehicles(){
        axios.get('http://localhost:5000/vehicles') 
            .then(response=>{
                setVehicles(response.data);


            })
            .catch(error=>{
                console.log('There was an error fetching the vehicles data!',error);
            })
    }
    function handleDelete(id){
        axios.delete(`http://localhost:5000/vehicles/${id}`)
        .then(()=>{
            fetchVehicles();
        })
        .catch(error=>{
            console.log('There was an error deleting the vehicle data!',error);
        })
    
    }


    return (
        <div className="container mt-4">
            
            
            <div className="row">
                {vehicles.map(vehicle => (
                    <div className="col-md-4" key={vehicle.id}>
                        <div>
                            <img src={vehicle.image} className="card-img-top" height={250} alt={vehicle.name}/>
                            <div className="card-body">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="car-text">Price : ${vehicle.price}</p>
                                <p className="car-text">Mileage : {vehicle.mileage} </p>
                                <p className="car-text">Seats : {vehicle.seats} </p>
                                <p className="car-text">Color: { vehicle.color} </p>
                                <p className="car-text">Fuel : {vehicle.fuel } </p>
                                <p className="car-text">Gear : { vehicle.gear} </p>
                                <p className="car-text">Description : {vehicle.description } </p>
                                <button className="btn btn-warning me-2" onClick={() => navigate(`/update-vehicle/${vehicle.id}`)}>Update</button>

                                <button className="btn btn-danger" onClick={()=>handleDelete(vehicle.id)}>Delete</button>
                                
                                
                            </div>
                        </div>


                    </div>


                ))}
            </div>


        </div>
    )
}


export default VehicleList;