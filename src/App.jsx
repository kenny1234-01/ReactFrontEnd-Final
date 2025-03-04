import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Contact from './assets/Contact'
import Hello from './assets/Hello'
import Counter from './assets/Counter'

function App() {
  const helloData = [
    {name: 'Sarawut', message: 'Hi there'},
    {name: 'Kenny', message: 'Hello..'}
  ];
  return (
    <>
      <div>
        <Counter/>
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message}/>
        ))}

        <Contact email="Sarawut@gmail.com" phone="0910616692"/>
      </div>
    </>
  )
}

export default App
