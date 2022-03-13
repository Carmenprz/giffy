import React from 'react'
import './App.css'
import SearchResults from './pages/SearchResults'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { Route, Link } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'


export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link href='/'>
          <h1>GIFFY</h1>
        </Link>
        <GifsContextProvider>
          <Route
            component={Home}
            path="/" />
          <Route
            component={SearchResults}
            path="/search/:keyword" />
          <Route
            component={Detail}
            path="/gif/:id" />
        </GifsContextProvider>
      </section>
    </div>
  )
}