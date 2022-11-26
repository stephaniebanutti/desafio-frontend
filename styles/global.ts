import { globalCss } from '@stitches/react'


export const body = globalCss({
  'body': { 
   background: '#050505',
  height: '100%',
  margin: 0 
  },
  'html':{
    height: '100%',
    margin: 0 
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
