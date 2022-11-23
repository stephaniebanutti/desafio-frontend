import { globalCss } from '@stitches/react'
import { css } from '@stitches/react'


export const body = globalCss({
  'body': { 
   background: '#050505'
  }
})

export const ConfigIndex = css({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-end',
})

export const globalStyles = globalCss({
  '*': { 
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins',
    // background: '#050505'
  }
})

export const input = css({
  background: '#202020',
  border: '1px solid #414141',
  borderRadius: '8px',
  width: '100%',
  height: '39px',
  padding: '9px 16px',
  color: 'rgb(153 147 147)',
  margin: '4px 0 4px 0',
})

export const select_inp = css({
  background: '#202020',
  border: '1px solid #414141',
  borderRadius: '8px',
  width: '100%',
  height: '39px',
  padding: '9px 16px',
  color: 'rgb(153 147 147)',
  margin: '4px 0 4px 0',
})

export const text_h1 = css({
  color: '#fff',
  textAlign: 'center',
  fontSize: '25px',
})

export const text_p = css({
  color: '#fff',
  textAlign: 'center',
  fontSize: '14px',
  marginBottom: '10px'
})

export const checkbox = css({
  margin:'0',
  textAlign: 'center',
  marginTop: '30px',
  fontWeight: '200',
  flexDirection: 'row',
})

export const text_checkbox = css({
  color: '#fff',
  textAlign: 'center',
  fontSize: '10px',
  verticalAlign: 'middle'
})

export const formulario = css({
  background: '#1D1D1D 50%',
  maxWidth: '40%',
  borderRadius: '8px',
  padding: '30px 50px',
  border: '2px solid #2A2A2A',
  margin: '30px 20px',
  height: '10%'
})

export const button_register = css({
  background: '#00F2B1',
  borderRadius: '8px',
  width: '100%',
  height: '39px',
  padding: '9px 16px',
  marginTop: '4px',
  fontWeight: '500',
  cursor: 'pointer'
})
