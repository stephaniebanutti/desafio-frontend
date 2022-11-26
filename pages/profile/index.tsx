import { Container } from "../../styles/pages"


const ProfileUser = (props: any) => {
  
  return (
   <section >
      <div className={Container()}>
        <div id='card_prifile'>
        <div id="infoUser">
          <img id="img_user" src="/images/user-img.png" alt="Imagem do Usuario" />
          <h1>Bem vindo</h1>
          <div id="details_home">&nbsp;</div>
        </div>
        </div>
    </div>
  </section>
  )
}

export default ProfileUser
