import React from 'react'
import './styles.css'
import IMAGE from './logo.png'
import LOGO from './react-2.svg'
import ClickCounter from './ClickCounter'

export const App = () => {
  const name = 'Reetik'
  return (
    <>
      <h1>
        Hello React TypeScript Webpack Starter Template - {name}
        {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={IMAGE} alt="React logo" width="300" height="300" />
      <img src={LOGO} alt="React logo" width="300" />
      <ClickCounter />
    </>
  )
}
