import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx';
import {About, Contact, Home, User, Github} from './components/index.js'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />} > 
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='user/:userid' element = {<User />} />
      <Route path='github' element = {<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)