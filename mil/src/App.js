import React, {useState, useEffect } from 'react'
import Kids from './Kids';
import Father from './Father';
import Mather from './Mather';
import './App.css';
import Buttons from './Buttons';

require('typeface-montserrat')
class App extends React.Component {
  

    render()
{
  return  ( 
  
     <div className="App" >
      <Kids /> 
   <Father />    
   <Mather />
 < Buttons />

     </div>

    )
}
  }



export default App;
