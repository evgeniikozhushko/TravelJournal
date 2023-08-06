// import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from "./data"
import './App.css'

export default function App() {
  const cards = data.map(item => {
    return(
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="app--container">
      <Navbar />
      <section className="cards--list">
        {cards}
      </section>
      <Card />
    </div>
  )
}
