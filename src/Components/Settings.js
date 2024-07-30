import React from 'react';
import './Settings.css';
import dayjs from "dayjs";

const formattedDate = dayjs().format('DD-MM-YYYY');


const Settings = () => {

    return (

        <div className="settings">

            <header className="settings-header">
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

            <nav className="settings-nav">
                <ul>
                    <li><a href="/dashboard" target="_blank" rel="noopener noreferrer">DASHBOARD</a></li>
                    <li><a href="/calendar" target="_blank" rel="noopener noreferrer">CALENDAR</a></li>
                    <li><a href="/deadlines" target="_blank" rel="noopener noreferrer">DEADLINES</a></li>
                    <li><a href="/meetings" target="_blank" rel="noopener noreferrer">MEETINGS</a></li>
                    <li><a href="/tasks" target="_blank" rel="noopener noreferrer">TASKS</a></li>
                    <li><a href="/settings" target="_blank" rel="noopener noreferrer">SETTINGS</a></li>
                </ul>
            </nav>

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


            <footer className="settings-footer">

                <p>2024 &copy; All Right Researved by Lady Amely</p>
            </footer>


        </div>
    );


}

export default Settings;
    