import Data from "../memesData"
import React from "react"

export default function Meme(){
    
    const memesData = Data.data.memes
    const [memeImg, getMemeImg] = React.useState("")

    function getRandomUrl(){
        const randomnumber = Math.floor(Math.random() * memesData.length)
        getMemeImg(memesData[randomnumber].url)
    }

    return(
    <main>
        <div className="form" >
            <div className="input-area">
            <input className="upper" type="text" placeholder="Top text" />
            <input className="lower" type="text" placeholder="Bottom text" />
            </div>
            <button type="submit" onClick={getRandomUrl}>Get a new meme image</button>
        </div >
        <img src={memeImg} alt=" " />
    </main>
        
    )
}