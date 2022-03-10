import "./RoundedCheckbox.css"

const RoundedCheckbox = () => {
    return(
        <label className="rounded-checkbox-container">
            <input type="checkbox"/>
            <span className="checkmark"></span>
        </label>
    )
}

export default RoundedCheckbox