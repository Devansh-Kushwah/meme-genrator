
export default function NavBar(){
    return(
        <nav>
            <div className="nav-icon">

            <div className="meme-face">
                <img src={require("../images/meme-face.png")} alt="meme-face" />
            </div>
            <h3>Meme App</h3>
            </div>
            <p className="side-heading">React Course Project-3</p>
        </nav>
    )
}