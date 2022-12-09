import '../App.css'
import trollFace from '../images/Troll Face.png'

function Header() {
    return (
        <div className='header-div'>
            <div className='header-brand'>
                <img src={trollFace} alt="" />
                <h2>Meme Generator</h2>
            </div>

            <div>
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}

export default Header