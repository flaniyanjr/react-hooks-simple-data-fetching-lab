import React, {useEffect, useState} from 'react'

function App() {
    const [dogData, setDogData]= useState({})
    const [render, setRender]= useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(dogObj => {
            setDogData(dogObj)
            setRender(true)
        })
    }, [])

    if (!render) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src= {dogData.message} alt="A Random Dog"/>
        </div>
    )
}

export default App