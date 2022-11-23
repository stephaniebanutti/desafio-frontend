import { NextPage } from "next"
import { text_h1, text_p, formulario } from "../../styles/global"
import TextField from '../componentes/field-text'
import RegisterUser from "../functions/RegisterUser"
import ButtonRegister from "./buttom"
import Checkbox from "./checkbox"
import InputSelect from "./input-select"

const paises = [
  'Brasil', 'Estados Unidos', 'Inglaterra'
]


const Form : NextPage = () => {
  return (
    <section className={formulario()}>
      <form onSubmit={RegisterUser}>
        <h1 className={text_h1()} >Cadastre-se</h1>
        <p className={text_p()}>Para começar, insira os dados abaixo:</p>
        <TextField required={true} placeholder="Nome" type="text"/>
        <TextField required={true} placeholder="Sobrenome" type="text"/>
        <TextField required={true} placeholder="E-mail" type="email"/>
        <TextField required={true} placeholder="Data de Nacimento" type="date"/>
        <TextField required={true} placeholder="Senha" type="password"/>
        <InputSelect required={true} itens={paises} placeholder="Selecione seu país"/>
        <TextField required={true} placeholder="Bio" type="text"/>
        <ButtonRegister text="Cadastrar"/>
        <Checkbox label="&nbsp;Desejo receber notificações" type="checkbox"/>
      </form>
    </section>
  )
}

export default Form
