








import React from "react";
import {Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {

    const useAuth=()=>{
        const user=localStorage.getItem('loggedUser')
        console.log(user)
        if(user){
          return true
        } else {
          return false
        }
      }

      const auth = useAuth()

    return auth ? <Outlet /> : <Navigate to="/" />
    
}


export default ProtectedRoute;


<Route path="/" element={<ProtectedRoute />}>
              <Route element={<MainLayout/>}>
                <Route path="/dashboard" element={<Dashboard/>}  />
                <Route path="/addJob" element={<JobForm/>}  />
                <Route path="/jobpost/:id" element={<JobPost/>}  />
                <Route path="/devinfo/:id" element={<DevInfo/>}  />
                <Route path="/messages/:id" element={<Messages/>}  />
                <Route path="/chatroom/:id" element={<ChatRoom/>}  />
              </Route>

{/* Main Layout: */}
import React, {useContext} from 'react';
import Header from '../Header';
import {Outlet} from 'react-router-dom'
import {IconContext} from '../IconProvider';


export const MainLayout = () => {
    const {msgUpdate} = useContext(IconContext);
    const [msgToggle] = msgUpdate;

    return(
        <div className="h-100">
            <Header msgToggle={msgToggle} />
            <Outlet />
        </div>
    )
}