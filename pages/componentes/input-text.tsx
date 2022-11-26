const TextField = (props:any) => {
  
    const ValueInput = (event) => {
      props.AltFunction(event.target.valeue)
    }

  return (
    <div>
      <input value={props.value} onChange={ValueInput} required={props.required} type={props.type} placeholder={props.placeholder}/>
    </div>
      
  )
}

export default TextField
