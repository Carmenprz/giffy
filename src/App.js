import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'
import {Route} from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <a href='/gif/panda'>Gifs pandas</a>
        <a href='/gif/morty'>Gifs morty</a>
        <a href='/gif/rick'>Gifs rick</a>
        <Route
          component={ListOfGifs}
          path="/gif/:keyword" />
      </section>
    </div>
  )
}