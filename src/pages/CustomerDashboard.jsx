import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard=()=>{
    const [data,setData]=useState([]);
    const [search,setSearch]=useState("");
    const [type,setType]=useState("");
    const [parking,setParking]=useState("");
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("evalData"))||[]);

    },[]);
    const filtered=data.filter((el)=>{
        return(
            el.restaurantName.toLowerCase().includes(search.toLowerCase())&&
            (type?el.type===type:true)&&
            (parking?String(el.parkingLot)===parking:true)
        );
    });
return(
    <div>
        <h2>Customer Dashboard</h2>
        <Navbar
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        setParking={setParking}
        />
        {filtered.map((el)=>(
            <RestaurantCard key={el.restaurantID} item={el}/>
        ))}
    </div>
);
};
export default CustomerDashboard;