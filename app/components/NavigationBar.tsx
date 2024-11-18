"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NavigationBarProps {
  currentDay: number;
  totalDays: number;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ currentDay, totalDays }) => {
  const router = useRouter();

  const handleNavigation = (day: number) => {
    router.push(`/gifts/${day}`);
  };

  return (
    <div style={styles.navigationContainer}>
      {[...Array(totalDays)].map((_, index) => {
        const day = index + 1;
        const isToday = day === currentDay;

        return (
          <div
            key={day}
            onClick={() => handleNavigation(day)}
            style={{
              ...styles.iconContainer,
              ...(isToday ? styles.currentDay : {}),
            }}
          >
            <Image
              src="/image.png" 
              alt={`Day ${day}`}
              width={30}
              height={30}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NavigationBar;

const styles = {
  navigationContainer: {
    position: 'fixed' as const,
    bottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    padding: '10px',
    boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  iconContainer: {
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '50%',
    transition: 'transform 0.2s',
  },
  currentDay: {
    border: '2px solid #b30000', // Christmas red border for the current day
    transform: 'scale(1.1)', // Slightly larger to highlight
  },
};
