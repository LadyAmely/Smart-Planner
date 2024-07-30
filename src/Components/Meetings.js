import React from 'react';
import './Meetings.css';
import dayjs from "dayjs";

const formattedDate = dayjs().format('DD-MM-YYYY');

const Meetings = () => {

    return(

        <div className="meetings">

            <header className="meetings-header">
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

            <nav className="meetings-nav">
                <ul>
                    <li><a href="/dashboard" target="_blank" rel="noopener noreferrer">DASHBOARD</a></li>
                    <li><a href="/calendar" target="_blank" rel="noopener noreferrer">CALENDAR</a></li>
                    <li><a href="/deadlines" target="_blank" rel="noopener noreferrer">DEADLINES</a></li>
                    <li><a href="/meetings" target="_blank" rel="noopener noreferrer">MEETINGS</a></li>
                    <li><a href="/tasks" target="_blank" rel="noopener noreferrer">TASKS</a></li>
                    <li><a href="/settings" target="_blank" rel="noopener noreferrer">SETTINGS</a></li>
                </ul>
            </nav>

            <main className="meetings-main">

                <div className="meetings-content">
                    <h2>Meetings details</h2>
                    <div class="meeting-details">
                        <p><strong>Title:</strong>Team Meeting</p>
                        <p><strong>Date:</strong> 2024-07-30</p>
                        <p><strong>Hour:</strong> 14:00</p>
                        <p><strong>Localization:</strong>Conference Room A</p>
                        <p><strong>Participants:</strong> John Smith, Emily Johnson</p>
                    </div>
                    <div class="agenda">
                        <h3>Agenda</h3>
                        <ul>
                            <li>Discussion of the project results</li>
                            <li>Planning the next steps</li>
                        </ul>
                    </div>
                    <div class="attachments">
                        <h3>Attachments</h3>
                        <ul>
                            <li><a href="#" download>Project plan.pdf</a></li>
                            <li><a href="#" download>Results Report.docx</a></li>
                        </ul>
                    </div>
                    <div class="notes">
                        <h3>Notes and Summary</h3>
                        <p>The meeting will focus on the project results and planning for further activities. We will also discuss possible challenges and solution strategies.</p>
                    </div>
                    <div class="actions">
                        <button className="btn-edit">Edit Meeting</button>
                        <button className="btn-delete">Delete Meeting</button>
                    </div>
                </div>


            </main>


            <footer className="meetings-footer">

                <p>2024 &copy; All Right Researved by Lady Amely</p>
            </footer>


        </div>


    );
}

export default Meetings;

