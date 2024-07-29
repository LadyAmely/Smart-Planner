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

            <header className="calendar-header">
                <h1>SMART PLANNER</h1>
                
                <div class="search-container">
                    <input type="text" class="search-input" placeholder="Search Projects.."/>
                     <button class="search-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                       </svg>
                     </button>
                 </div>

                 <div className="today-text">
                  <h1>Today: {formattedDate}</h1>
                </div>
                 
            </header>

            <nav className="calendar-nav">
                <ul>
                    <li><a href="/dashboard" target="_blank" rel="noopener noreferrer">DASHBOARD</a></li>
                    <li><a href="/calendar" target="_blank" rel="noopener noreferrer">CALENDAR</a></li>
                    <li><a href="/deadlines" target="_blank" rel="noopener noreferrer">DEADLINES</a></li>
                    <li><a href="/meetings" target="_blank" rel="noopener noreferrer">MEETINGS</a></li>
                    <li><a href="/tasks" target="_blank" rel="noopener noreferrer">TASKS</a></li>
                    <li><a href="/settings" target="_blank" rel="noopener noreferrer">SETTINGS</a></li>
                </ul>
            </nav>

            <main className="calendar-main">
            <h2 class="week-title">Weekly Task Distribution</h2>
                <section className="calendar-content">
                
                <section className="bar-chart-content">
               
          <Box>
            <Typography variant="h5" color="#3563d9" fontWeight="bold" family= 'Quicksand' mb={2}>
           
            </Typography>
          
            <Bar data={barData} options={barOptions}/>
          </Box>
        </section>
                    <div className="planner">
                      <h2 class="task-list-title">Task List</h2>
                        <div className="planner-tasks">
                            <div className='planner-p'>
                              <div className="planner-title">
                                <p>Client Meeting</p>
                                <div className="tasks-time">
                                <p>10:00 AM</p>
                                </div>
                                <p>Discuss project updates and next steps.</p>
                              </div>
                            </div>
                            <div className='planner-p'>
                              <div className="planner-title">
                                <p>Email Review</p>
                                <div className='tasks-time'>
                                  <p>11:30 AM</p>
                                </div>
                                <p>Reply to all pending client emails.</p>
                              </div>
                            </div>
                            <div className='planner-p'>
                              <div className="planner-title">
                                <p>Lunch</p>
                                <div className='tasks-time'>
                                <p>1:00 PM</p>
                                </div>
                                <p>Try the new café downtown.</p>
                              </div>
                            </div>
                            <div className='planner-p'>
                              <div className="planner-title">
                                <p>Team Discussion</p>
                                <div className="tasks-time">
                                  <p>2:00 PM</p>
                                </div>
                                <p>Brainstorm ideas for the upcoming project.</p>
                              </div>
                            </div>
                            <div className='planner-p'>
                              <div className="planner-title">
                                <p>Project Planning</p>
                                <div className='tasks-time'>
                                <p>4:00 PM</p>
                                </div>
                                <p>Outline milestones and deliverables.</p>
                              </div>
                            </div>
                        </div> 
                    </div>
                 
                    </section>

                <section className="chart-content">

                    <h2 class="task-list-title">Progress Tracking of Completed Tasks</h2>
                   

                    <Line data={data} options={LineOptions}/>
                   
                  
                </section>

                <section className='circle-content'>
                  <h2 class="task-list-title">Activities and Time Allocation</h2>
                <Root>
                <div style={{ transform: 'scale(0.98)', width: '370px', height: '370px' }}> 
                  <Pie data={pieData} options={pieOptions} />
                </div>

             
              
              </Root>
                    
                </section>

               
            </main>

            <footer className="calendar-footer">
                <p>2024 &copy; All Right Researved by Lady Amely</p>
            </footer>

          

    </div>
);


}

export default Calendar;
