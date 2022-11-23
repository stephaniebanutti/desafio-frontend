import { NextPage } from "next"
import { checkbox, text_p, text_checkbox } from "../../styles/global"

const Checkbox : NextPage = (props) => {
  return (
    <div className={checkbox()}>
      <input type={props.type} />
      <label className={text_checkbox()}>{props.label}</label>
    </div>
      
  )
}

export default Checkbox
