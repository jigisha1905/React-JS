import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return(
      <div>
        <h1>Custom React!!</h1>
      </div>
    )
}

//App is a function,we can make our own function also like MyApp

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
//making a react element according to react
const reactelement= React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  //reactelement
  //anotherElement
  //this is converted into a object
)
