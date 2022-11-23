import { NextPage } from "next"
import { input } from "../../styles/global"

const TextField : NextPage = (props) => {
  return (
    <div>
      <input required={props.required} className={input()} type={props.type} placeholder={props.placeholder}/>
    </div>
      
  )
}

export default TextField
