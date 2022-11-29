import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import BodyBuilder from './BodyBuilder/BodyBuilder';
import { Route, Routes } from 'react-router-dom';
import Headline from '../Components/Headline/Headline';
import PlayController from '../Components/PlayController/PlayController';
import Shop from '../Components/Shop/Shop';
import Error from '../Components/UI/Error/Error';
import PlayId from '../Components/PlayId/PlayId';
import SingleProduct from '../Components/SinngleProduct/SingleProduct';
import Dashboard from '../Components/Authentication/Dashboard/Dashboard';
import Login from '../Components/Authentication/Login/Login';
import SharedLayout from '../Components/SharedLayout/SharedLayout';
import ProtectedRoute from '../Components/Authentication/ProtectedRoute/ProtectedRoute';


function App() {

  const [user, setUser]= React.useState(null)

  
  return (
    
      <div className="App">
          <Routes>
            <Route path='/' element={<SharedLayout/>}>
              <Route index element={<BodyBuilder/>}/>
              <Route path='/home' element={<BodyBuilder/>}/>
              <Route path="headline" element={<Headline/>}/>
              <Route path="playcontroller" element={<PlayController/>}/>
              <Route path="shop" element={<Shop/>}/>
              <Route path='shop/:productId' element={<SingleProduct/>}/>
              <Route path='playcontroller/:playId' element={<PlayId/>}/>
              <Route path='login' element={<Login setUser={setUser}></Login>}/>

              <Route path='dashboard' element={
                <ProtectedRoute user={user}>
                   <Dashboard user={user}/>
                </ProtectedRoute>
              }>
                
              </Route>
              
              
              <Route path="*" element={<Error/>}/>
              
            </Route>
          </Routes> 
      </div>
    
  );
}

export default App;
