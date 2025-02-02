import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import AddMenu from '../pages/AddMenu'
import Banner from '../components/Banner'
import MenuNavBar from '../components/MenuNavBar'
import Footer from '../components/Footer'
import Terms from '../components/Terms'
import Header from '../components/Header'

const Routers = () => {
  return (
    <>
      <Router basename='/'>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Banner />
                <MenuNavBar />
                <Footer />
                <Terms />
              </>
            }
          />
          <Route path='/addMenu' element={<AddMenu />} />
        </Routes>
      </Router>
    </>
  )
}
export default Routers
