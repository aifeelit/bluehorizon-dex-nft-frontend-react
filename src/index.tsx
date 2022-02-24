import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Providers from './Providers'


ReactDOM.render(
  // <React.StrictMode>
  //     <Providers>
  //       <App />
  //     </Providers>
  // </React.StrictMode>,
  <div>
    <Providers>
      <App />
    </Providers>
  </div>,
  document.getElementById('root'),
)
