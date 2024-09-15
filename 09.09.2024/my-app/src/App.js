import React from 'react';
import './App.css';
import Name from "./components/Name";
import Counter from './components/Counter';

function App() {
  const user = {
    name: 'Cat Paw',
    imageUrl: 'https://lirp.cdn-website.com/1ce4dbecaee64753bdb182e3ac314b06/dms3rep/multi/opt/ThinkstockPhotos-149052633-1920w.jpg',
    imageSize: 90,
  };
  
  return (
    <>
      <Name title="Kris" />
      <Name />
      <Counter />
      <hr></hr>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )

}

export default App;
