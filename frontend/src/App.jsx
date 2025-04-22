import { useEffect, useState } from 'react'

import './App.css'
import {Route} from 'react-router-dom'
import  HomePage  from './Pages/Homepage'
import ChatsPage from './Pages/Chatpage'
import axios from 'axios'


function App() {
 
 

  return (
    <div className='Main'>
      <Route path="/" exact component={ HomePage}/>
      
       
       <Route path="/chats" component={ ChatsPage} exact/>
      
      
     
       
     
    </div>
  )
}

export default App
