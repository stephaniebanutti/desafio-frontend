import { NextPage } from "next"
import { text_area } from "../../styles/pages"

const TextArea = (props) => {
  
    
    const ValueInput = (event) => {
      props.AltFunction(event.target.value)
    }

  return (
    <div>
      <textarea value={props.value} onChange={ValueInput} required={props.required} className={text_area()} type={props.type} placeholder={props.placeholder}/>
    </div>
      
  )
}

export default TextArea
