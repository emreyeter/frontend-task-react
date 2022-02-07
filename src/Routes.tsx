
import React from "react";
 import {
   BrowserRouter as Router,
   Route,
   Routes,
   Link
 } from "react-router-dom";
 
 import { EventDetail,Events } from "./pages";

 export default  () => {
   return (
     <Routes>    
           <Route path="/" element={<Events />} />
           <Route path="/event/:id" element={<EventDetail />} />
     </Routes>
   );
 }