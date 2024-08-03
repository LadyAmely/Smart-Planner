

import Dashboard from './Components/Dashboard';
import Calendar from './Components/Calendar';
import Settings from './Components/Settings';
import Tasks from './Components/Tasks';
import Deadlines from './Components/Deadlines';
import Meetings from './Components/Meetings';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


function App() {
  return (

    <Router>
     <div className="App">
      <Routes>
          <Route path="/" element={<Calendar/>} />
          <Route path="/analysis_report" element={<Calendar/>} />
          <Route path="/calendar" element={<Dashboard/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/tasks" element={<Tasks/>}/>
          <Route path="/deadlines" element={<Deadlines/>}/>
          <Route path="/meetings" element={<Meetings/>}/>

        </Routes>


    </div>

    </Router>

  );
}

export default App;
