import React from 'react';
import './Dashboard.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';



const Dashboard = () => {
    return (
        <div className="dashboard">

           
            <header className="dashboard-header">
                <h1>Smart Planner</h1>
               
            </header>
            <nav className="dashboard-nav">
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#calendar">Calendar</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </nav>
            <main className="dashboard-main">
                <section className="dashboard-content">
                <FullCalendar
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                    />
                </section>
            </main>
            <footer className="dashboard-footer">
                <p>&copy; 2024 Lady Amely</p>
            </footer>
           
        </div>
    );
}

export default Dashboard;
