import type { NextPage } from 'next'
import { ConfigIndex } from '../styles/global'
import Form from './componentes/form'
import Header from './componentes/header'
import ImageIndex from './componentes/image-index'

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <div className={ConfigIndex()}>
        <Form/>
        <ImageIndex/>
      </div>
    </div>
  
  )  
}

export default Home

