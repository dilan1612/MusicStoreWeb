import  {BrowserRouter, Routes, Route} from 'react-router-dom' 
import LoginPage  from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { AuthProvider } from './context/AuthContex'
import Instruments from './pages/Instruments'
import InstrumentsFormPage from './pages/InstrumentsFormPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'

import ProtectedRoute from './ProtectedRoutes'
import { InstrumentContextProvider } from './context/InstrumentContext'
import Navbar from './components/Navbar'
import CatalogPage from './pages/catalogPage'

 function App() {
  return (
    <AuthProvider>
      
      <InstrumentContextProvider>
        <BrowserRouter>
          <Navbar/>
          <main className='container mx-auto px-10'>

          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              
              <Route element={<ProtectedRoute/>}>
                <Route path="/instrument" element={<Instruments/>} />
                <Route path="/add/instrument" element={<InstrumentsFormPage/>} />
                <Route path="/instrument/:id" element={<InstrumentsFormPage/>} />
                <Route path='/catalog' element={<CatalogPage/>} />
                <Route path="/profile" element={<ProfilePage/>} />
              </Route>
          </Routes>

          </main>
        </BrowserRouter>
      </InstrumentContextProvider>

      
       </AuthProvider>
  )
}

export default App;