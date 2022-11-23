import { NextPage } from "next"
import { button_register } from "../../styles/global"

const ButtonRegister : NextPage = (props) => {
  return (
    <div>
        <button className={button_register()}>{props.text}</button>
    </div>
      
  )
}

export default ButtonRegister
