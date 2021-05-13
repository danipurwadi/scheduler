import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UploadSchedule from './components/UploadScheduleComponent';
import CreateSchedule from './components/CreateScheduleComponent';
import NavigationBar from './components/NavBarComponent';
import Main from './components/MainComponent';

function App() {
  return (
    <div>
      <NavigationBar />
      <Main />
    </div>
    
  );
}

export default App;