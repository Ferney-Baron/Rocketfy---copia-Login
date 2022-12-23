import LoginApp from './components/LoginApp'
import RegisterApp from './components/RegisterApp'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeApp from './components/HomeApp'


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginApp/>}/>
          <Route path='/Signup' element={<RegisterApp/>}/>
          <Route path='/home' element={<HomeApp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
