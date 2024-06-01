import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Counter></Counter>
      <Person ></Person>
      <Device name='mobile' price='1000'></Device>
      <Device name='laptop' price='2000'></Device>
      <Device name='Iphone' price='3000'></Device>
    </>
  )
}

function Person() {
  const age = 25
 const money = 20
  const name = 'shakil'
  return (
    <>
      <h1>my name is {name}. i am {age} old. i need { money} doller</h1>
    </>
  )
}

function Device(props) {
  console.log(props);
  return (
    <h2>This device: {props.name} price: { props.price}</h2>
  )
}


export default App
