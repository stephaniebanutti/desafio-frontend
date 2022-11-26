import {checkform } from "../../styles/pages"

const Checkbox = (props) => {
  return (
    <div className={checkform()}>
      <input onChange={props.AltFunction} checked={props.checked} id="check" type={props.type} />
      <label htmlFor="check">{props.label}</label>
    </div>
      
  )
}

export default Checkbox
