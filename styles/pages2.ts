import { globalCss } from '@stitches/react'
import { css } from '@stitches/react'


export const body = globalCss({
  'body': { 
   background: '#050505',
   marginTop: '20px'
  }
})

export const globalStyles = globalCss({
  '*': { 
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins',
  },
  
})

export const BgPage = css({
  // backgroundImage: "url('/images/globe.png'), url('/images/elipse_mid.png')",
  // backgroundPosition: 'right',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: '59%, 46%',
  // height: '647px',
  // width: '60%',
  // textAlign: 'center',
})

// export const teste = css({
//   margin:'30px'
// })

export const ConfigIndex = css({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
    
})

export const text_h1 = css({
  color: '#fff',
  textAlign: 'center',
  fontSize: '35px',
})

export const text_p = css({
  color: '#fff',
  textAlign: 'center',
  fontSize: '13px',
  marginBottom: '6px'
})

export const checkbox = css({
  textAlign: 'center',
  marginTop: '20px',
  fontWeight: '200',
  flexDirection: 'row',
  transform: 'scale(1)',
})

export const text_checkbox = css({
  color: '#fff',
  textAlign: 'center',
  fontSize: '13px',
  verticalAlign: 'middle'
})


export const text_home = css({
  
})

export const p_home = css({
  
})

export const details_home = css({
  
})

export const formulario = css({
  background: '#1D1D1D 50%',
  width: '40%',
  borderRadius: '8px',
  border: '2px solid #2A2A2A',
  margin: '0px 0px 30px 60px',
  height: '80%',
})

export const teste = css({
  borderRadius: '8px',
  padding: '20px 50px',
  height: '80%',
  marginRight: '-49%',

  'h2': {
    color: '#fff',
    textAlign: 'center',
    fontSize: '43px'
  },
  'span':{
    color: '#fff',
    textAlign: 'center',
    fontSize: '15px',
    marginTop: '5px'
  },
  'details_home' :{
    textAlign: 'left',
    borderRadius: '8px',
    background: '#00F2B1',
    width: '40px',
    height: '5px',
    margin: '8px',
  }
  
})

export const input = css({
  background: '#202020',
  border: '1px solid #414141',
  borderRadius: '8px',
  width: '100%',
  height: '42px',
  padding: '9px 16px',
  color: 'rgb(153 147 147)',
  margin: '6px 0px',
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

export const select_inp = css({
  background: '#202020',
  border: '1px solid #414141',
  borderRadius: '8px',
  width: '100%',
  height: '42px',
  color: 'rgb(153 147 147)',
  margin: '4px 0 4px 0',
})

export const button_register = css({
  background: '#00F2B1',
  borderRadius: '8px',
  width: '100%',
  height: '42px',
  padding: '9px 16px',
  marginTop: '4px',
  fontWeight: '500',
  cursor: 'pointer',
  fontSize: '16px'
})
