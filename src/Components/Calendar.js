import React from 'react';
import './Calendar.css';
import './planner.css';
import './chart.css';
import './search.css';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import './ScrollbarStyles.css';
import './styles.css';
import dayjs from 'dayjs';
import './sidebar.css';
import './header.css';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


import { Line, Pie, Bar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    
  );

  const formattedDate = dayjs().format('DD-MM-YYYY');

  const barData = {
    labels: ['Client Meetings', 'Emails and Communication', 'Project Work', 'Team Collaboration', 'Breaks and Lunch'],
    datasets: [
      {
        label: 'Hours Spent',
        data: [10, 8, 20, 5, 7],
        backgroundColor: '#3563d9ce',
        borderColor: '#3563d9',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#3563d9',
        },
      },
      
    },
    scales: {
      x: {
        ticks: {
          color: '#ecf0f1',
          font: {
            family: 'Quicksand',
          },
        },
      },
      y: {
        ticks: {
          color: '#ecf0f1',
          font: {
            family: 'Quicksand',
          },
          stepSize: 5,
        },
      },
    },
  };

  const Root = styled(Box)({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-40px',
    
   
  });

  const Label = styled(Typography)({
    position: 'absolute',
    fontSize: '1.0rem',
    color: '#ecf0f1',
    fontWeight: 'bold',
  });
  
  const pieData = {
    labels: ['Client Meeting', 'Email Review', 'Team Discussion', 'Project Planning', 'Lunch', 'Relaxation'],
    datasets: [
      {
        label: '%',
        data: [35, 19, 20, 10, 9, 7],
        backgroundColor: [
          '#2c54b875',
          'rgba(54, 162, 235, 0.2)',
          '#3aa5de85',
          'rgba(75, 192, 192, 0.2)',
          '#55d0fd51',
          '#205bf04e'
        ],
        borderColor: [
          '#2c54b8',
          'rgba(54, 162, 235, 1)',
          '#3aa5de',
          'rgba(75, 192, 192, 1)',
          '#55d0fda7',
          '#3a70f9'
        ],
        borderWidth: 1
      }
    ]
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          color: '#f6f7f9',

        }
      },
      title: {
        display: true,
        color: '#ecf0f1',
        font: {
          family: 'Quicksand',
          size: 0,
         
         
        },
        padding: {
          top:0,
          bottom: 0,
        }
        
      }
    }
  };


const Calendar = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Completed Tasks',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            area: true,
            backgroundColor: '#3563d9ce', 
            borderColor: '#3563d9ce',
            color: '#3563d9ce',
            tension: 0.1
          }
        ]
      };
    

      const LineOptions = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#3563d9ce',
            },
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `Percentage of completed tasks: ${tooltipItem.raw}`;
              }
            }
          }
        },
        scales: { 
          x: {
            ticks: {
              color: '#ecf0f1',
              font: {
                family: 'Quicksand',
              }
            },
          },
          y: {
            ticks: {
              color: '#ecf0f1',
              font: {
                family: 'Quicksand',
              },
              stepSize: 20,
            },
          },
        }
      };
      

   

return (

    <div className="calendar">

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


        <div className="calendar-main">

            <div className="white-block">
                <section className='circle-content'>
                    <Root>
                        <div style={{transform: 'scale(0.98)', width: '450px', height: '410px'}}>
                            <Pie data={pieData} options={pieOptions}/>
                        </div>
                    </Root>
                </section>


            </div>

            <div className="chart-block">

                <section className="chart-content">

                    <div style={{transform: 'scale(0.98)', width: '770px', height: '370px'}}>

                        <Line data={data} options={LineOptions}/>

                    </div>

                </section>

            </div>

            <div className="bar-block">
                <section className="bar-chart-content">

                    <div style={{transform: 'scale(0.98)', width: '670px', height: '260px'}}>

                        <Box>
                            <Typography variant="h5" color="#3563d9" fontWeight="bold" family='Quicksand' mb={2}>

                            </Typography>

                            <Bar data={barData} options={barOptions}/>
                        </Box>

                    </div>
                </section>


            </div>

            <div className="block">

                <section className="chart-content">

                    <div style={{transform: 'scale(0.98)', width: '570px', height: '290px'}}>

                        <Line data={data} options={LineOptions}/>

                    </div>

                </section>

            </div>


        </div>


    </div>
);


}

export default Calendar;
