import { Content} from '../styles/pages'
import Header from './componentes/header.js'
import InfoHome from './componentes/info-home'
import Form from './home/form'

const Home = () => {
  return (
    <>
      <Header/>
      <div className={Content()}>
        <Form />
        <InfoHome/>
      </div>
    </>
  )  
}

export default Home

