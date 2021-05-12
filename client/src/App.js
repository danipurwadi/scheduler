import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UploadSchedule from './components/UploadScheduleComponent';
import NavigationBar from './components/NavBarComponent';

function App() {
  return (
    <div>
      <NavigationBar />
      <UploadSchedule />
    </div>
    
  );
}

export default App;