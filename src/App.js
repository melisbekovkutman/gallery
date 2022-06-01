
import './App.css';
import React, { useState } from 'react'
import Photo from '../src/img/kyrgyzstan-landscape-lake.jpg'
import Images from '../src/img/istockphoto-1294990080-170667a.jpg'
import Surot from '../src/img/20495308.jpg'
import Cars from '../src/img/HByeKGm.jpg'
import Sea from '../src/img/1080p-Wallpapers-Full-HD-Download.jpg' 
import Mosque from '../src/img/Ismlaic-Architecture12.jpg'

function App() {

  const [count, setCount] = useState();
  return (
    <div className="App">
      <div className='images'>
      <img className='photo' onClick={ () => setCount(Photo)} src={Photo}/>
      <img className='image' onClick={ () => setCount(Images)} src={Images}/>
      <img className='surot' onClick={ () => setCount(Surot)} src={Surot}/>
      <img className='cars' onClick={ () => setCount(Cars)} src={Cars}/>
      <img className='sea' onClick={ () => setCount(Sea)} src={Sea}/>
      <img className='mosque' onClick={ () => setCount(Mosque)} src={Mosque}/>
      </div>

      <img className='count' src={count}/>
      

      
      
    </div>
  );
}

export default App;
