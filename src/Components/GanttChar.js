import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';


const TimelineContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  border: '1px solid #ccc',
  margin: '20px 0',
  padding: '10px',
});




// Dodaj więcej stylów w razie potrzeby
const Task = styled(Paper)(({ start, end }) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const now = new Date();
    const daysFromNow = (date) => Math.round((date - now) / (1000 * 60 * 60 * 24));
  
    return {
      position: 'absolute',
      left: `${daysFromNow(startDate) * 100 / 30}%`, // Zakładamy 30-dniowy zakres
      width: `${(daysFromNow(endDate) - daysFromNow(startDate)) * 100 / 30}%`,
      backgroundColor: '#3f51b5',
      color: '#fff',
      padding: '10px',
      textAlign: 'center',
      borderRadius: '4px',
      boxShadow: '0 3px 5px 2px rgba(63, 81, 181, .3)',
    };
  });
  


const formatDate = (date) => date.toISOString().split('T')[0];

const GanttChart = ({ tasks }) => {
  const now = new Date();

  return (
    <Box>
      <Typography variant="h6">Upcoming Deadlines</Typography>
      <TimelineContainer>
        {tasks.map((task, index) => (
          <Task key={index} start={task.start} end={task.end}>
            {task.name}
            <br />
            {formatDate(new Date(task.start))} - {formatDate(new Date(task.end))}
          </Task>
        ))}
      </TimelineContainer>
    </Box>
  );
};

export default GanttChart;
