import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';
import './App.css'
import Layout from './Layout';
import Home from './pages/Home';
// import CategoryDesc from './pages/Menu';
import Menu from './pages/Menu';
import { useState } from 'react';
import SignIn from './components/SignIn';
// import StartOrderPopUp from './components/StartOrderPopUp';

const App = () => {
  const [startOrder, setStartOrder] = useState(false);
  // const [, setStartOrder] = useState(false);
  const handleModal = () => setStartOrder(startOrder ? false : true);

  const router = createBrowserRouter(
    createRoutesFromElements(
    <>
      
      <Route path='/' element={<Layout startOrder={startOrder} handleModal={handleModal} modalWrapper={"modal-wrapper"} modalContainer={"modal-container"}/>}>
        
        <Route path='/' element={<Home startOrder={startOrder} handleModal={handleModal}/>}/>
        <Route path='/menu' element={<Menu startOrder={startOrder} handleModal={handleModal}/>}/>
        <Route path='/menu/:url' element={<Menu startOrder={startOrder} handleModal={handleModal}/>}/>
      </Route>
      <Route path='/signIn' element={<SignIn/>}/>
      </>
    )
  )

  return (
    <>
      
      <RouterProvider router={router} >
      </RouterProvider>
      
    </>
  )
}

export default App
