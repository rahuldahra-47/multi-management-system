import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-7r0lhiyfqnhwpj2j.us.auth0.com"
    clientId="tdEhnsiCBJwUOBtTi6LmVE5DjZypnnOl"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
)
