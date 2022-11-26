import { css } from '@stitches/react'


export const Content = css({
  width: '100%',
  height: '100vh',
  display: 'flex',

  'div' : {
    width: '100%',
    height: '100%'
  },

})


export const BgPage = css({
  backgroundImage: "url('/images/globe.png'), url('/images/elipse_mid.png')",
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '576px, 451px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  
  "div":{
    height: '0px'
  },

  "span":{
    color: '#fff',
    fontSize: '13px',
    marginTop: '5px',
    textAlign: 'initial'
  },

  "h2":{
    color: '#fff',
    textAlign: 'center',
    fontSize: '51px'
  },
  "#details_home":{
    textAlign: 'left',
    borderRadius: '8px',
    background: '#00F2B1',
    width: '40px',
    height: '11px',
    margin: '8px 0px',
  },

})


export const ConfigIndex = css({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
})

export const CardForm = css({
  width: '90%',
  height: '664px',
  background: 'rgba(29, 29, 29, 0.5)',
  border: '2px solid #2A2A2A',
  borderRadius: '8px',
  margin: '30px 50px 0px 120px',
  color: "#FFF",
  textAlign: 'center',
  padding: '33px',

  'h3': {
    color: "#FFF",
  },

  'p':{
    fontSize: '14px',
    marginBottom: '20px'
  },
  'input, select': {
    background: '#202020',
    border: '1px solid #414141',
    borderRadius: '8px',
    width: '100%',
    padding: '9px 16px',
    color: 'rgb(153 147 147)',
    margin: '7px 0px',
  },
  "#check":{
    width: '13px'

  },
  'label':{
    fontSize:'10px',
  }
})


export const checkform = css({
  marginTop: '15px'
})


export const button_register = css({
  background: '#00F2B1',
  borderRadius: '8px',
  width: '100%',
  height: '44px',
  fontWeight: '500',
  cursor: 'pointer',
  fontSize: '14px'
})

export const text_checkbox = css({
  textAlign: 'center',
  marginTop: '20px',
  fontWeight: '200',
  flexDirection: 'row',
  transform: 'scale(1.3)',
})

export const text_area = css({
  background: '#202020',
  border: '1px solid #414141',
  borderRadius: '8px',
  width: '100%',
  height: '80px',
  padding: '9px 16px',
  color: 'rgb(153 147 147)',
  margin: '11px 0px',
  resize: 'none'
})


export const Container = css({
  height: '100vh',
  display: 'flex',
  backgroundImage: "url('/images/globe_full.png'), url('/images/elipse_back.png')",
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '549px, 561px',
  backgroundPositionX: 'center',

  '#card_prifile':{
    margin:'auto',
    height: '48%',
    width: '54%',
    background: 'rgb(29 29 29 / 67%)',
    border: '1px solid #414141',
    borderRadius: '8px',
    padding: '54px',
    textAlign: 'center',
    color: '#FFF',
  },

'#infoUser':{
  width:'100%'
},

'#img_user':{
  borderRadius: '50%',
  maxWidth: '70px',
  margin: '7px'
},

'h1':{
  fontSize: '50px',
  marginBottom: '10px'
},

"#details_home":{
  textAlign: 'left',
  borderRadius: '8px',
  background: '#00F2B1',
  width: '40px',
  height: '8px',
  marginInline: 'auto'
},

})

