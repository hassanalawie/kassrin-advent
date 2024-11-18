"use client";

import { useState, useEffect, FC } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState("");
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setTimeRemaining("It's December! Open today's gift!");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setDay(days)
      setHour(hours)
      setMinute(minutes)
      setSecond(seconds)
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    // Call updateTimer immediately to set the initial value
    updateTimer();
    if(timeRemaining === "hi"){
      console.log(timeRemaining)
    }
    // Set interval to update every second
    const interval = setInterval(updateTimer, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);
  return (
    <div style={styles.container}>
      <div style={styles.timeBox}>
        <p style={styles.timeValue}>{day}</p>
        <p style={styles.timeLabel}>Days Remaining</p>
      </div>
      <div style={styles.timeBox}>
        <p style={styles.timeValue}>{hour}</p>
        <p style={styles.timeLabel}>Hours Remaining</p>
      </div>
      <div style={styles.timeBox}>
        <p style={styles.timeValue}>{minute}</p>
        <p style={styles.timeLabel}>Minutes Remaining</p>
      </div>
      <div style={styles.timeBox}>
        <p style={styles.timeValue}>{second}</p>
        <p style={styles.timeLabel}>Seconds Remaining</p>
      </div>
    </div>
  )
};

export default CountdownTimer;

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px', // Space between each time box
      padding: '20px',
      borderRadius: '10px',
    },
    timeBox: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    timeValue: {
      fontSize: '2.5rem', // Larger font size for the numbers
      color: '#b30000', // Christmas red
      fontWeight: 'bold' as const,
      marginBottom: '5px',
    },
    timeLabel: {
      fontSize: '1rem',
      color: '#2b2d42', // Darker color for the label text
      fontWeight: 'normal' as const,
    },
  };