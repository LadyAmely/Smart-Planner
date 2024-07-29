import React from 'react';
import './Dashboard.css';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';
import dayjs from "dayjs";

const formattedDate = dayjs().format('DD-MM-YYYY');

const Dashboard = () => {
    return (
        <div className="dashboard">


            <header className="dashboard-header">
                <h1>Smart Planner</h1>

                <div class="search-container">
                    <input type="text" className="search-input" placeholder="Search Projects.."/>
                    <button className="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>

                <div className="today-text">
                    <h1>Today: {formattedDate}</h1>
                </div>


            </header>

            <nav className="dashboard-nav">
                <ul>
                    <li><a href="/dashboard" target="_blank" rel="noopener noreferrer">DASHBOARD</a></li>
                    <li><a href="/calendar" target="_blank" rel="noopener noreferrer">CALENDAR</a></li>
                    <li><a href="/deadlines" target="_blank" rel="noopener noreferrer">DEADLINES</a></li>
                    <li><a href="mettings" target="_blank" rel="noopener noreferrer">METTINGS</a></li>
                    <li><a href="tasks" target="_blank" rel="noopener noreferrer">TASKS</a></li>
                    <li><a href="/settings" target="_blank" rel="noopener noreferrer">SETTINGS</a></li>
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
