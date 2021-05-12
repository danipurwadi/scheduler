import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UploadSchedule from './components/UploadScheduleComponent';
import NavigationBar from './components/NavBarComponent';
import CreateSchedule from './components/CreateScheduleComponent';

function App() {
  return (
    <div>
      <NavigationBar />
      <CreateSchedule />
    </div>
    
  );
}

export default App;