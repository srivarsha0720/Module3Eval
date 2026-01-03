const { useState } = require("react");
import {useLocation,useNavigate} from "react-router-dom";

const UpdateRestaurant=()=>{
    const {state}=useLocation();
    const {navigate}=useNavigate();
    const [name,setName]=useState(state.restaurantName);
    const update=()=>{
        const data =
        JSON.parse(localStorage.getItem("evalData"));
        const updated=data.map((el)=>
        el.restaurantID===state.restaurantID?{...el,restaurantName:name}:el);
        localStorage.setItem("evalData",JSON.stringify(updated));
        alert("Updated");
        navigate ("/admin/dashboard");

    };
    return(
        <div>
            <h2>Update Restaurant</h2>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={update}>Updateaa</button>
        </div>
    );
};
export default UpdateRestaurant;