import React from "react";
const Navbar=({search,setSearch,type,setType,parking,setParking})=>{
    return(
        <div>
            <input placeholder="Search restaurant" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <select value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="">All Types</option>
            <option value="Rajasthani">Rajasthani</option>
              <option value="Gujarati">Gujarati</option>
                <option value="Mughlai">Mughlai</option>
                  <option value="Jain">Jain</option>
                    <option value="Thai">Thai</option>
                      <option value="North Indian">North Indian</option>
                      <option value="South Indian">South Indian</option>
        </select>
             <select value={parking} onChange={(e)=>setParking(e.target.value)}>
            <option value="">All</option>
            <option value="true">parking</option> 
            <option value="false">no parking</option> 
            </select>

        </div>
    );
};
export default Navbar;