import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

import { HomePage } from './pages/HomePage/HomePage'
import { MenuPage } from './pages/MenuPage/MenuPage'
import { MenuDetailPage } from './pages/MenuDetailPage/MenuDetailPage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { GalleryPage } from './pages/GalleryPage/GalleryPage'
import { CartPage } from './pages/CartPage/CartPage'
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'
import { StatusPage } from './pages/StatusPage/StatusPage'
import { MemberPage } from './pages/MemberPage/MemberPage'
import { AllStatusPage } from './pages/AllStatusPage/AllStatusPage'

import { useUserContext } from './context/UserContext'

function App() {
  const { isUserLoaded } = useUserContext()
  if (!isUserLoaded) return <div>Loading</div>

  return (
    <BrowserRouter basename="/coffee">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/menu/:menu_name" component={MenuDetailPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/AllStatus" component={AllStatusPage} />
        <Route path="/status/:order_id" component={StatusPage} />
        <Route path="/member" component={MemberPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
