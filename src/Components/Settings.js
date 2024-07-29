import React from 'react';
import './Settings.css';


const Settings = () => {

    return (
    
        <div className="settings">
    
                <header className="settings-header">
                    <h1>Smart Planner</h1>
                </header>
    
                <nav className="settings-nav">
                    <ul>
                        
    
                        <li><a href="/dashboard" target="_blank" rel="noopener noreferrer">Dashboard</a></li>
                        <li><a href="/calendar" target="_blank" rel="noopener noreferrer">Calendar</a></li>
                        <li><a href="/settings" target="_blank" rel="noopener noreferrer">Settings</a></li>
                    </ul>
                </nav>
    
                <main className="settings-main">
                    <section className="settings-content">
    
                     
                   
                    </section>
                   
                </main>
    
                <footer className="settings-footer">
                    <p>&copy; 2024 Lady Amely</p>
                </footer>
    
    
        </div>
    );
    
    
    }
    
    export default Settings;
    