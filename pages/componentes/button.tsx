import { button_register } from "../../styles/pages"

const ButtonRegister = (props:any) => {
  return (
    <div>
        <button className={button_register()}>{props.text}</button>
    </div>
      
  )
}

export default ButtonRegister
