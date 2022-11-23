import { NextPage } from "next"
import { select_inp } from "../../styles/global"

const InputSelect : NextPage = (props) => {

  return (
    <div>
      <select required={props.required} className={select_inp()}>
        {props.itens.map(item => <option key={item}> {item}</option>)}
      </select>
    </div>
  )
}

export default InputSelect
