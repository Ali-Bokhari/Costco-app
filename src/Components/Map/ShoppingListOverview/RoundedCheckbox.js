import "./RoundedCheckbox.css"

const RoundedCheckbox = (props) => {
    return(
        <label className="rounded-checkbox-container">
            <input type="checkbox" defaultChecked={props.isChecked}/>
            <span className="checkmark"></span>
        </label>
    )
}

export default RoundedCheckbox