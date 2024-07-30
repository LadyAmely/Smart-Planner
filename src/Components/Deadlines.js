import React from 'react';
import './Deadlines.css';
import dayjs from "dayjs";
import './ScrollbarStyles.css';

const formattedDate = dayjs().format('DD-MM-YYYY');

const Deadlines = () => {

    return(

        <div className="deadlines">

            <header className="deadlines-header">
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

            <nav className="deadlines-nav">
                <ul>
                    <li><a href="/dashboard" target="_blank" rel="noopener noreferrer">DASHBOARD</a></li>
                    <li><a href="/calendar" target="_blank" rel="noopener noreferrer">CALENDAR</a></li>
                    <li><a href="/deadlines" target="_blank" rel="noopener noreferrer">DEADLINES</a></li>
                    <li><a href="/meetings" target="_blank" rel="noopener noreferrer">MEETINGS</a></li>
                    <li><a href="/tasks" target="_blank" rel="noopener noreferrer">TASKS</a></li>
                    <li><a href="/settings" target="_blank" rel="noopener noreferrer">SETTINGS</a></li>
                </ul>
            </nav>

            <main className="deadlines-main">

                <div class="content-header">
                    <h2>Upcoming Deadlines</h2>
                    <button className="add-deadline-button">Add Deadline</button>
                </div>

                <div className="deadlines-content">

                    <ul class="deadlines-list">

                        <li className="deadline-item">
                            <div class="deadline-date">Aug 1, 2024</div>
                            <div class="deadline-title">Project Alpha - Final Report</div>
                            <div class="deadline-priority high">High Priority</div>
                            <div class="deadline-description">Complete the final report for Project Alpha.</div>
                        </li>
                        <li className="deadline-item">
                            <div class="deadline-date">Aug 5, 2024</div>
                            <div class="deadline-title">Client Meeting - Q3 Review</div>
                            <div class="deadline-priority medium">Medium Priority</div>
                            <div class="deadline-description">Prepare presentation for Q3 review meeting with client.
                            </div>
                        </li>
                        <li className="deadline-item">
                            <div class="deadline-date">Aug 7, 2024</div>
                            <div class="deadline-title">Project Beta - Mid-Term Evaluation</div>
                            <div class="deadline-priority low">Low Priority</div>
                            <div class="deadline-description">Conduct a mid-term evaluation of Project Beta to assess progress, identify any issues, and adjust the project plan as necessary.

                                .
                            </div>
                        </li>
                        <li className="deadline-item">
                            <div class="deadline-date">Aug 8, 2024</div>
                            <div class="deadline-title">Team Discussion - Email Review</div>
                            <div class="deadline-priority low">Low Priority</div>
                            <div class="deadline-description">Review and optimize email communication strategies to improve efficiency and clarity within the team and with external stakeholders.


                            </div>
                        </li>
                        <li className="deadline-item">
                            <div class="deadline-date">Aug 10, 2024</div>
                            <div class="deadline-title">Team Discussion - Project Planning</div>
                            <div class="deadline-priority high">High Priority</div>
                            <div class="deadline-description">Plan and discuss the key aspects of the upcoming project to ensure all team members are aligned and prepared for execution..
                            </div>
                        </li>


                    </ul>

                </div>


            </main>

            <footer className="deadlines-footer">

                <p>2024 &copy; All Right Researved by Lady Amely</p>
            </footer>


        </div>


    );
}

export default Deadlines;

