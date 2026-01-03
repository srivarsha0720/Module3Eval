const { useState, useEffect } = require("react");
import Navbar from "../components/Navbar";
import restaurantCard from "../components/RestaurantCard";

const AdminDashboard=()=>{
    const [data,setData]=useState([]);
    const [name,setName]=useState("");
    const [type,setType]=useState("Rajasthani");
    const [search,setSearch]=useState("");
    const [filterType,setFilterType]=useState("");
    const [parking,setParking]=useState("");
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem("evalData"))||[]);},[]);
        const addRestaurant=()=>{
            if (!name) return alert("Empty field");
            const newItem={
            restaurantID:Date.now(),
            restaurantName:name,
            address:"Jaipur",
            type,
            parkingLot:true,
            };
            const updated =[...data,newItem];
            localStorage.setItem("evalData",JSON.stringify(updated));
            setData(updated);
            setName("");
            alert("Added");
        };
        const filtered=data.filter((el)=>{
            return(
                el.restaurantName.ToLowerCase().includes(search.toLowerCase())&&
                (filterType?el.type===filterType:true)&&
                (parking?String(el.parkingLot)===parking:true)
            );
        });
        return(
            <div>
                <h2>Admin DAshboard</h2>
                <Navbar 
                search={search}
                setSearch={setSearch}
                type={filterType}
                setType={setFilterType}
                parking={parking}
                setParking={setParking}
/>
<input placeholder="Restaurant name" value={name} onChange={(e)=>setType(e.target.value)}
/>
<select onChange={(e)=>setType(e.target.value)}>
    <option>Rajasthani</option>
              <option>Gujarati</option>
          <option>Mughlai</option>
                  <option>Jain</option>
                    <option>Thai</option>
                      <option>North Indian</option>
                      <option>South Indian</option>
</select>
<button onClick={addRestaurant}>Add</button>
{filtered.map((el)=>(
    <restaurantCard key={el.restaurantID} item={el} admin/>
))}
            </div>
        );
    };
export default AdminDashboard;