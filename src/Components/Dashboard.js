import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.css';
import './sidebar.css';
import './header.css';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const localizer = momentLocalizer(moment);

const myEventsList = [

];

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h3>Planner Menu</h3>
                <div className="section">
                    <h2>Tasks & Projects</h2>
                    <ul>
                        <li><a href="/dashboard"><i className="fas fa-tachometer-alt"></i>Dashboard</a></li>
                        <li><a href="/calendar"><i className="fas fa-calendar-alt"></i>Calendar</a></li>
                        <li><a href="/deadlines"><i className="fas fa-calendar-check"></i>Deadlines</a></li>
                        <li><a href="/meetings"><i className="fas fa-handshake"></i>Meetings</a></li>
                        <li><a href="/tasks"><i className="fas fa-tasks"></i>Tasks</a></li>
                        <li><a href="/settings"><i className="fas fa-cogs"></i>Settings</a></li>
                    </ul>
                </div>
                <div className="section">
                    <h2>About the App</h2>
                    <ul>
                        <li><a href="/about_me"><i className="fas fa-user"></i>About me</a></li>
                        <li><a href="/terms"><i className="fas fa-file-alt"></i>Terms of Use</a></li>
                        <li><a href="/privacy_policy"><i className="fas fa-lock"></i>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="sidebar-footer">
                    <p>Powered by Lady Amely</p>
                    <p>Contact Me</p>
                    <p>
                        <a href="https://www.facebook.com/yourprofile" className="social-icons"><i
                            className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/yourprofile" className="social-icons"><i
                            className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/yourprofile" className="social-icons"><i
                            className="fab fa-linkedin-in"></i></a>
                    </p>
                </div>
            </div>
            <div className="header">
                <a href="#" className="logo">Smart Plan</a>
                <div className="nav-links">
                    <a href="/help_support">Help & Support</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="actions">
                    <i className="fas fa-bell action-btn" title="Notifications"></i>
                    <i className="fas fa-search action-btn" title="Search"></i>
                    <i className="fas fa-cog action-btn" title="Settings"></i>
                    <i className="fas fa-user action-btn" title="Profile"></i>
                </div>
            </div>
            <div className="content">
                <section className="dashboard-content">
                    <div className="fullcalendar-wrapper">
                        <Calendar
                            localizer={localizer}
                            events={myEventsList}
                            startAccessor="start"
                            endAccessor="end"
                            style={{height: 550, width: '90%'}}
                        />
                    </div>
                </section>
            </div>

            <div className="footer">
                <p>&copy; 2024 Lady Amely. All rights reserved</p>
                <div className="social-icons">
                    <a href="#facebook" title="Facebook">F</a>
                    <a href="#instagram" title="Instagram">I</a>
                    <a href="#linkedin" title="LinkedIn">L</a>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
