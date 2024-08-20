import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Pesquisa from './pages/Pesquisa.jsx'
import Contacts from './pages/Contacts.jsx'
import DetalhesFilme from './pages/DetalhesFilme.jsx'
import Search from './components/Search.jsx'

import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <App/>,
  children: [
    {index: true, element: <Home />},
    {path: "blog", element: <Blog />},
    {path: "pesquisa", element: <Pesquisa/>},
    {path: "contacts", element: <Contacts/>},
    {path: 'search', element: <Search />},
    {path: 'pesquisa/:id', element: <DetalhesFilme/>},
    {path: 'search/:id', element: <DetalhesFilme/>},
    {path: '/:id', element: <DetalhesFilme/>},
    

  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
