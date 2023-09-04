import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"

const App = () => {
  return (
    <div className="maindiv">
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<Homepages />} />
          <Route path='/singlepage/:id' exact element={<SinglePage />} />
        </Routes>
        {/*<Footer />*/}
      </Router>
    </div>
  )
}

export default App
