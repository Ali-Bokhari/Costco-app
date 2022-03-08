import "./Header.css"

const Header = (props)=>{
    return(
        <div className="headerdiv">
            <br /><h1 className="py-2 text-center header">{props.title}</h1>
        </div>
    )
}

export default Header;