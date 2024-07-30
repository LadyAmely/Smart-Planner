import React from 'react';
import './Tasks.css';
import dayjs from "dayjs";



const formattedDate = dayjs().format('DD-MM-YYYY');

const Tasks = () => {

    return(

        <div className="tasks">

            <header className="tasks-header">
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

            <nav className="tasks-nav">
                <ul>
                    <li><a href="/dashboard" target="_blank" rel="noopener noreferrer">DASHBOARD</a></li>
                    <li><a href="/calendar" target="_blank" rel="noopener noreferrer">CALENDAR</a></li>
                    <li><a href="/deadlines" target="_blank" rel="noopener noreferrer">DEADLINES</a></li>
                    <li><a href="/meetings" target="_blank" rel="noopener noreferrer">MEETINGS</a></li>
                    <li><a href="/tasks" target="_blank" rel="noopener noreferrer">TASKS</a></li>
                    <li><a href="/settings" target="_blank" rel="noopener noreferrer">SETTINGS</a></li>
                </ul>
            </nav>

            <main className="tasks-main">

                <ul class="tasks-list">

                    <li className="tasks-item">
                        <div class="task-list tasks-content">
                            <h2 class="section-title">Task List</h2>
                            <div className="list-tasks">
                                <div className="tasks-box">
                                    <div className="task-title">
                                        <p>Client Meeting</p>
                                    </div>
                                    <div class="tasks-deadline">Due: August 1, 2024</div>
                                </div>

                                <div className="tasks-box">
                                    <div className="task-title">
                                        <p>Email Review</p>
                                    </div>
                                    <div class="tasks-deadline">Due: August 3, 2024</div>
                                </div>

                                <div className="tasks-box">
                                    <div className="task-title">
                                        <p>Project Alpha Final Report</p>
                                    </div>
                                    <div class="tasks-deadline">Due: August 4, 2024</div>
                                </div>

                                <div className="tasks-box">
                                    <div className="task-title">
                                        <p>Team Discussion</p>
                                    </div>
                                    <div class="tasks-deadline">Due: August 5, 2024</div>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li className="tasks-item">
                        <div class="task-details tasks-content">
                            <h2 class="section-title">Task Details</h2>
                            <div class="task-info">
                                <h3>Selected Task: Prepare Project Alpha Final Report</h3>
                                <p>Description: Complete and finalize the report for Project Alpha to ensure all
                                    deliverables
                                    are met and submitted on time.</p>
                                <p>Assigned To: John Doe</p>
                                <p>Deadline: August 1, 2024</p>
                                <textarea placeholder="Add notes here..." className="task-notes"></textarea>
                            </div>
                        </div>
                    </li>

                    <li className="tasks-item">
                        <div class="task-management tasks-content">
                            <h2 class="section-title">Create New Task</h2>
                            <form className="task-form">
                                <label htmlFor="task-title">Task Title:</label>
                                <input type="text" id="task-title" name="task-title" placeholder="Enter task title"
                                       required/>

                                <label htmlFor="task-deadline">Deadline:</label>
                                <input type="date" id="task-deadline" name="task-deadline" required/>

                                <label htmlFor="task-assignee">Assign To:</label>
                                <input type="text" id="task-assignee" name="task-assignee"
                                       placeholder="Enter assignee name"
                                       required/>

                                <label htmlFor="task-description">Description:</label>
                                <textarea id="task-description" name="task-description"
                                          placeholder="Enter task description"></textarea>

                                <button type="submit" className="btn-submit">Create Task</button>
                            </form>
                        </div>

                    </li>

                    <li className="tasks-item">

                        <div class="task-filters tasks-content">
                            <h2 class="section-title">Filter Tasks</h2>
                            <div class="filters">
                                <label htmlFor="filter-assignee">Filter by Assignee:</label>
                                <input type="text" id="filter-assignee" name="filter-assignee"
                                       placeholder="Enter assignee name"/>

                                <label htmlFor="filter-date">Filter by Date:</label>
                                <input type="date" id="filter-date" name="filter-date"/>

                                <button type="button" className="btn-apply-filters">Apply Filters</button>
                            </div>
                        </div>
                    </li>


                </ul>




            </main>


            <footer className="tasks-footer">
                <p>2024 &copy; All Right Researved by Lady Amely</p>

            </footer>


        </div>


    );
}

export default Tasks;

