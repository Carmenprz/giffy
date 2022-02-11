import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import Home from './pages/Home'
import {Route, Link} from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link href='/'>
          <h1>GIFFY</h1>
        </Link>
        <Route
          component={Home}
          path="/" />
        <Route
          component={ListOfGifs}
          path="/search/:keyword" />
      </section>
    </div>
  )
}