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
// import Provider from "src/providers/Providers";
// import MainTemplate from "src/components/templates/MainTemplate/MainTemplate";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <App />}>
    <Route index element={<Numbers />} />
    {/* <Route path="chosen" element={<ChosenNumbers />}> */}
    {/* </Route> */}
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <MainTemplate>  */}
   {/* <Provider> */}
    <RouterProvider router={router}/>
{/* </Provider> */}
 {/* </MainTemplate> */}
  </React.StrictMode>,
)
