import React from 'react';
import './Deadlines.css';
import dayjs from "dayjs";
import './ScrollbarStyles.css';
import './sidebar.css';
import './header.css';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const formattedDate = dayjs().format('DD-MM-YYYY');

const Deadlines = () => {

    return(

        <div className="deadlines">

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


            <main className="deadlines-main">


                <div className="deadlines-content">

                    <div className="content-header">
                        <h2>Upcoming Deadlines</h2>
                        <button className="add-deadline-button">Add Deadline</button>

                    </div>

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
                            <div class="deadline-description">Conduct a mid-term evaluation of Project Beta to assess
                                progress, identify any issues, and adjust the project plan as necessary.

                                .
                            </div>
                        </li>
                        <li className="deadline-item">
                            <div class="deadline-date">Aug 8, 2024</div>
                            <div class="deadline-title">Team Discussion - Email Review</div>
                            <div class="deadline-priority low">Low Priority</div>
                            <div class="deadline-description">Review and optimize email communication strategies to
                                improve efficiency and clarity within the team and with external stakeholders.
                            </div>
                        </li>


                    </ul>

                </div>


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

export default Deadlines;

