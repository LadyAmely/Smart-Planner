

import Dashboard from './Components/Dashboard';
import Calendar from './Components/Calendar';
import Settings from './Components/Settings';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (

    <Router>
     <div className="App">
    
      <Routes>
          <Route path="/" element={<Calendar/>} />
          <Route path="/dashboard" element={<Calendar/>} />
          <Route path="/calendar" element={<Dashboard/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>


    </div>

    </Router>

  );
}

export default App;
