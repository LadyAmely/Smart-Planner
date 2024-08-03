import React from 'react';
import './Meetings.css';
import dayjs from 'dayjs';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const formattedDate = dayjs().format('DD-MM-YYYY');

const Meetings = () => {
    return (
        <div className="meetings">
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
            <div className="content-main">
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
                        <p>The meeting will focus on the project results and planning for further activities. We will
                            also discuss possible challenges and solution strategies.</p>
                    </div>
                    <div class="actions">
                        <button className="btn-edit">Edit Meeting</button>
                        <button className="btn-delete">Delete Meeting</button>
                    </div>


                </div>
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

export default Meetings;
