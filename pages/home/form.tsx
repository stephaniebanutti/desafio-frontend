import { useRouter } from "next/router"
import { NextPage } from "next/types"
import { useState } from "react"
import { CardForm } from "../../styles/pages"
import { post } from "../api/api"
import { IuserInfo } from "../api/__types"
import ButtonRegister from "../componentes/button"
import Checkbox from "../componentes/checkbox"
import InputSelect from "../componentes/input-select"
import TextField from "../componentes/input-text"
import TextArea from "../componentes/textarea"


const paises = [
  'Brasil', 'Estados Unidos', 'Inglaterra'
]


const Form = () => { 
  const router = useRouter()

    function goToProfile(){
      router.push("/profile")
    }
  
  

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dt_nasc, setDtNasc] = useState('')
  const [password, setPassword] = useState('')
  const [pais, setPais] = useState('')
  const [bio, setBio] = useState('')
  
  const [check, setCheck] = useState(false)
  const handleChecked = (r) => {setCheck(r.target.checked);}

  const handleSubmit=() =>{
    
    const data:IuserInfo =  {

      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
      country: pais,
      dateOfBirthday: dt_nasc,
      bio: bio,
      receiveNotifications: check
    }

    post(data)
  }


  return (
    <section className={CardForm()}>
      <form onSubmit={async (e)=> {
        e.preventDefault()
        // await
        await handleSubmit()
        goToProfile()
      } }>
        <h2>Cadastre-se</h2>
        <p>Para começar, insira os dados abaixo:</p>

        <TextField
          required={true} 
          placeholder="Nome" 
          type="text"
          value={name}
          AltFunction={value => setName(value)}
        />
        <TextField 
          required={true} 
          placeholder="Sobrenome"
          type="text"
          value={lastName}
          AltFunction={value => setLastName(value)}
        />
        <TextField 
          required={true} 
          placeholder="E-mail" 
          type="email"
          value={email}
          AltFunction={value => setEmail(value)}
        />
        <TextField 
          required={true} 
          placeholder="Data de Nacimento" 
          type="date"
          value={dt_nasc}
          AltFunction={value => setDtNasc(value)}
        />
        <TextField 
          required={true} 
          placeholder="Senha" 
          type="password"
          value={password}
          AltFunction={value => setPassword(value)}
        />

        <InputSelect 
          required={true} 
          itens={paises} 
          placeholder="Selecione seu país"
          value={pais}
          AltFunction={value => setPais(value)}
        />
        <TextArea 
          required={true} 
          placeholder="Bio" 
          type="text"
          value={bio}
          AltFunction={value => setBio(value)}
        />
        
        <ButtonRegister text="Cadastrar"/>

        <Checkbox 
        required={true}
        label="&nbsp;Desejo receber notificações" 
        type="checkbox"
        checked={check}
        AltFunction={handleChecked}
        />
      </form>
    </section>
  )
}

export default Form;