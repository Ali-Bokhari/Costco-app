import "./RoundedCheckbox.css"

const RoundedCheckbox = (props) => {
    return(
        <label className="rounded-checkbox-container">
            <input type="checkbox" checked={props.isChecked}/>
            <span className="checkmark"></span>
        </label>
    )
}

export default RoundedCheckbox