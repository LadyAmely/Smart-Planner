import React from 'react';
import './Tasks.css';
import dayjs from "dayjs";
import './sidebar.css';
import './header.css';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const formattedDate = dayjs().format('DD-MM-YYYY');

const Tasks = () => {

    return(

        <div className="tasks">

            <div className="header">
                <a href="#" className="logo">Smart Planner</a>
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
                        <li><a href="/analysis_report"><i className="fas fa-chart-line"></i>Analysis & Report</a></li>
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




            <div className="tasks-main">

                <ul class="tasks-list">



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

                </ul>
            </div>

        </div>


    );
}

export default Tasks;

