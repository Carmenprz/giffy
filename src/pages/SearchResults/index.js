import React, {useEffect, useState} from 'react';
import ListOfGifs from '../../components/ListOfGifs'
import getGifs from '../../services/getGifs'

export default function SearchResults ({ params }) {
    const { keyword } = params

    const [loading, setLoading] = useState(false)
    const [gifs, setGifs] = useState([])

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
      }, [keyword])

    if(loading) return <span>Loading...</span>

    return <>
        {loading
            ? <span>Loading...</span>
            : <ListOfGifs gifs={gifs} />
        }
    </>
}