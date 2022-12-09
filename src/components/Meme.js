function Meme() {
    return (
        <div className="meme-div">
            <form>
                <div className="form-inputs">
                    <input type="text" placeholder="Enter top text"/>
                    <input type="text" placeholder="Enter bottom text"/>
                </div>
                <button>Get new meme image 🖼️</button>
            </form>
        </div>
    )
}

export default Meme