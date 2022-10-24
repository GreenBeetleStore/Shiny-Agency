import React from 'react'
import ReactDOM from 'react-dom'
// In React router v6, we have to replace the <Switch> component with <Routes>.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'

// In React router v6, we have to replace the <Switch> component with <Routes>.
ReactDOM.render(
   <React.StrictMode>
      <Router>
         <Header /> 
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </Router>
   </React.StrictMode>,
   document.getElementById('root')   
)
