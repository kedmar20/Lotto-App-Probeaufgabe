import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import 'src/index.css'
import ChosenNumbers from "src/views/ChosenNumbers";
import Numbers from "src/views/Numbers";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <App />}>
    <Route index element={<Numbers />} />
    <Route path="chosen" element={<ChosenNumbers />}/>
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
