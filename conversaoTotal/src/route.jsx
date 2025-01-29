import React from 'react'
import App from './App'

function route() {
  return (
    <div> <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/temperature" element={<App/>} />
      <Route path="/length" element={<App/>} />
      <Route path="/volume" element={<App/>} />
      <Route path="/time" element={<App/>} />
      <Route path="/speed" element={<App/>} />
      <Route path="/weight" element={<App/>} />
    </Routes>
  </Router></div>
  )
}

export default route