import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shopping from './components/Shopping.jsx'
import GeneralLayout from './layouts/GeneralLayout.jsx'

function createInsideComponent(component) {
  return <GeneralLayout>{component}</GeneralLayout>

}
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={createInsideComponent(<App />)} />
        <Route path='/shopping' element={createInsideComponent(<Shopping />)} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)
