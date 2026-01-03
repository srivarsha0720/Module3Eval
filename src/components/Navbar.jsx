import {useRef} from "react";
const Navbar=({search,setSearch,type,setType,parking,setParking})=>{
  const ref=useRef(null);
    return(
        <div>
            <input ref={ref} placeholder="Search restaurant" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <select value={type} onChange={(e)=>setType(e.target.value)}/>
            <option value="">All Types</option>
            <option>Rajasthani</option>
              <option>Gujarati</option>
                <option>Mughlai</option>
                  <option>Jain</option>
                    <option>Thai</option>
                      <option>North Indian</option>
                      <option>South Indian</option>
        </select>
             <select value={parking} onChange={(e)=>setParking(e.target.value)}/>
            <option value="">All</option>
            <option value="true">parking</option> 
            <option value="false">no parking</option> 
            </select>

        </div>
    );
};
export default Navbar;