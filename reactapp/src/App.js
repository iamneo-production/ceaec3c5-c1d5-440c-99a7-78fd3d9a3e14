/*import Carder from './Carder';*/
import UserProfile from './dashboard/prof';
import 'react-router-dom';  
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Log from './Login/login';
import Sig from './Signup/Signup';
import Sidebar from './dashboard/dashboard';
import LandingPage from './Landingpage/landingpage';
/*import TextDisplay from './Morinfo/Moreinfo';*/
import TextDisplay from './About us/Aboutus';
import Contactus from './Contact Us/Contactus';
import InfoDisplay from './Info/info';
import Stats from './stat/stat';
import Dashe from './DashboardPage/dash';
import PriceList from './DashboardPage/price';
import Order from './DashboardPage/Order';
import PaymentsPage from './Existing/Existing';
import CheckoutForm from './Payment page/Payment';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/Login' element={<Log/>}/>
      <Route path = '/signup' element={<Sig/>}/>
      <Route path = '/dash' element={<Sidebar/>}/>
      <Route path = '/dash1' element={<dash1/>}/>
      <Route path = '/prof' element = {<UserProfile/>}/>
      <Route path='/About' element = {<TextDisplay/>}/>
      <Route path='/Contact' element = {<Contactus/>}/>
      <Route path='/Info' element = {<InfoDisplay/>}/>
      <Route path='/stat' element = {<Stats/>}/>
      <Route path='/dashe' element = {<Dashe/>}/>
      <Route path='/price' element = {<PriceList/>}/>
      <Route Path='/order' element = {<Order/>}/>
      <Route path='/Existing' element = {<PaymentsPage/>}/>
      <Route path='/Pay' element = {<CheckoutForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App