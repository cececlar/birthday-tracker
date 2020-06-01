import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import BirthdaysList from "./components/BirthdaysList";
import EditBirthday from "./components/EditBirthday";
import CreateBirthday from "./components/CreateBirthday";

 
function App() {
 return (
   <Router forceRefresh={true}>
     <div>
     <Navbar />
      <br/>
      <Route path="/edit/:id" component={EditBirthday} />
      <Route path="/create" component={CreateBirthday} />
      <Route path="/" exact component={BirthdaysList} />
     </div>
   </Router>
 );
}
 
export default App;