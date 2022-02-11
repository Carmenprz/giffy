import React from 'react'
import { Link } from 'wouter'

export default function Home() {
    const POPULAR_GIFS = ['Rick', 'Morty', 'Venezuela'];
    return (
        <>
            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link href={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}