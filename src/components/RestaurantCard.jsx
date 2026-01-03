import{useNavigate} from "react-router-dom";

const RestaurantCard=({item,admin})=>{
    const navigate=useNavigate();
    const handleDelete=()=>{
        if(!window.confirm("are you sure?")) return;
        const data=JSON.parse(localStorage.getItem("evalData"));
        const updated=data.filter((el)=>
        el.restaurantID!==item.restaurantID);
        localStorage.setItem("evalData",JSON.stringify(updated));
        alert("deleted");
        window.location.reload();
    };
    return(
        <div style={{border:"1px solid black",margin:10}}>
            <h3>{item.restaurantName}</h3>
            <p>{item.address}</p>
            <p>{item.type}</p>
            <p>{item.parkingLot?"parking available":"no parking"}</p>
            {
                admin &&(
                    <>
                    <button onClick={()=>
                        navigate("/admin/restaurants/update",{state:item})
                    }
                    >update</button>
                    <button onClick={handleDelete}>delete</button>
                    </>
                )
            }
        </div>
    );
};
export default RestaurantCard;