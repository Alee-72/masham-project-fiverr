import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header';
import  Dashboard  from './components/Dashboard' ;
import RecjobDashboard from './components/RecjobDashboard';
import Dashboard3 from './components/Dashboard3';
import Fotter from './components/Fotter';
import {MainFotter} from './components/MainFotter';
import Dashboard4 from './components/Dashboard4';

function App() {
  return (
    <div classname="body">

      <Header/>
      <Dashboard/>
      <RecjobDashboard/>
      <Dashboard3/>

      <Dashboard4/>
      <Fotter/>
     
      <MainFotter/>
   
    </div>
  );
}

export default App;
