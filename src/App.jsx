import React from "react"
export default function App () {

    const [starWarsData, setWarsData] = React.useState({}) 
    const [count, setCount] = React.useState(0)
    
    console.log("component rendered")

    function iClick () {
        console.log("it has been clicked")
        setCount(prevCount => prevCount + 1)
    }

    React.useEffect(function() {
        console.log("Effect ran")
    }, [count])

    return (
        <div className="button-name">
            <h2 className="head-one">The count is {count} </h2>
            <button onClick={iClick} >
                <p className="add-item">Add</p>
            </button>
        </div>
    )
}