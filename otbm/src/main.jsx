import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Catalogo from './pages/Catalogo.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Home />},
    {path: "blog", element: <Blog />},
    {path: "catalogo", element: <Catalogo />}
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
