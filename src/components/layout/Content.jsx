import './Content.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import About from '../../views/examples/About'
import Home from '../../views/examples/Home'
import Param from '../../views/examples/Param'
import NotFound from '../../views/examples/NotFound'

const Content = props => (
  <main className='Content'>
    <Routes>
      <Route path="/" element={<About />}/>
      <Route path="/about" element={<Home />}/>
      <Route path="/param/:id" element={<Param />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  </main>
)

export default Content