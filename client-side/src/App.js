import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from './components/Login'
import PhoneVerify from './components/PhoneVerify'
import Signup from './components/Signup'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path = '/' element = {<Login/>}/>
      <Route path = '/register' element = {<Signup/>}/>
      <Route path = '/dashboard' element = {<Dashboard/>}/>
      <Route path = '/phone/verify' element = {<PhoneVerify/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;