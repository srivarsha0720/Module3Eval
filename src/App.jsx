import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import UpdateRestaurant from "./pages/UpdateRestaurant";
import PrivateRoute from "./routes/PrivateRoute";

function App(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/admin/dashboard" element={
        <PrivateRoute role="admin">
          <AdminDashboard/>
        </PrivateRoute>
      }
      />
      <Route path="/customers/dashboard" element={
        <PrivateRoute role="customer">
          <CustomerDashboard/>
        </PrivateRoute>
      }
      />
      <Route path="/admin/restaurants/update" element={
        <PrivateRoute role="admin">
          <UpdateRestaurant/>
        </PrivateRoute>
      }
      />
    </Routes>
  );
}
export default App;