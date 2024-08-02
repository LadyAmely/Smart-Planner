import React from 'react';
import './Settings.css';
import dayjs from "dayjs";
import './sidebar.css';
import './header.css';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const formattedDate = dayjs().format('DD-MM-YYYY');

const Settings = () => {

    return (

        <div className="settings">

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


            <main className="settings-main">

                <section id="notifications-settings" class="settings-content notifications-settings">
                    <h3>Notification Settings</h3>
                    <div class="notification-option">
                        <label htmlFor="email-notifications">Email Notifications</label>
                        <input type="checkbox" id="email-notifications" checked/>
                    </div>
                    <div class="notification-option">
                        <label htmlFor="sms-notifications">SMS Notifications</label>
                        <input type="checkbox" id="sms-notifications"/>
                    </div>
                </section>

                <section id="theme-settings" class="settings-content theme-settings">
                    <h3>Theme Settings</h3>
                    <div class="theme-option">
                        <label htmlFor="theme-select">Select Theme</label>
                        <select id="theme-select">
                            <option value="light">Light</option>
                            <option value="dark" selected>Dark</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                </section>

                <section id="privacy-settings" class="settings-content privacy-settings">
                    <h3>Privacy Settings</h3>
                    <div class="privacy-option">
                        <label>Enable Two-Factor Authentication</label>
                        <button>Enable</button>
                    </div>
                    <div class="privacy-option">
                        <label>Data Privacy</label>
                        <button>Manage</button>
                    </div>
                </section>


            </main>

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

export default Settings;
    