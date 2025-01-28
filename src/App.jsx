import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Quality from './components/Quality/Quality'
import { Company } from './components/Company/Company'
import Logistic from './components/Logistic/Logistic'
import { Navbar } from './components/Navbar/Navbar'
import Swiper from './components/swiper/swiper'
// import './App.css'
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Company />
      <About />
      <Quality />
      <Logistic />
      <Contact />
      <Footer /> 
      {/* <Swiper/> */}
      {/* <Services /> */}
      {/* <Form /> */}
    </div>
  )
}

export default App
