import React from 'react'
import App from '../App'
import Temperature from '../pages/Temperature/temperature'

function route() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/temperature" element={<Temperature/>} />
        <Route path="/length" element={<App/>} />
        <Route path="/volume" element={<App/>} />
        <Route path="/time" element={<App/>} />
        <Route path="/speed" element={<App/>} />
        <Route path="/weight" element={<App/>} />
      </Routes>
    </Router>
  )
}

export default route