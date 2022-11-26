
const InputSelect = (props) => {

  return (
    <div>
      <select onChange={event => props.AltFunction(event.target.value)} value={props.value} required={props.required}>
        {props.itens.map(item => <option key={item}> {item}</option>)}
      </select>
    </div>
  )
}

export default InputSelect
