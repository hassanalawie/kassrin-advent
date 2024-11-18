"use client";

import { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import NavigationBar from './NavigationBar';
import { Gift } from '../gifts/[day]/page';

interface GiftPageProps {
  gift: Gift;
  day: string;
}

const GiftPage: React.FC<GiftPageProps> = ({ gift, day }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={styles.container}>
      <CountdownTimer targetDate={new Date("December 1, 2024 00:00:00")} />
      <h1 style={styles.title}>Christmas Advent Calendar Day {day}</h1>
      
      {gift.isAvailable ? (
        <>
          <img 
            src="https://i.pinimg.com/736x/3d/0f/b5/3d0fb5d45fadc30691a168a47933c675.jpg" 
            alt="Christmas Decoration" 
            style={styles.image}
          />
          <h2 style={styles.subTitle}>{gift.title}</h2>
          <p style={styles.giftText}>{gift.subTitle}</p>
          <button style={styles.button} onClick={openModal}>
            Open Gift
          </button>

          {/* Modal */}
          {isModalOpen && (
            <div style={styles.modalOverlay} onClick={closeModal}>
              <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeButton} onClick={closeModal}>×</button>
                <img src={gift.giftUrl} alt="Gift" style={styles.modalImage} />
                <p style={styles.modalText}>{gift.giftText}</p>
              </div>
            </div>
          )}
        </>
      ) : (
        <div style={styles.unavailableMessage}>
          <p>🎁 {gift.title}</p>
          <p>{gift.subTitle}</p>
        </div>
      )}

      <NavigationBar currentDay={parseInt(day)} totalDays={25} />
    </div>
  );
};

export default GiftPage;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '20px',
    width:"50%",
    textAlign:"center" as const
  },
  title: {
    fontSize: '3rem',
    color: '#b30000',
    marginBottom: '10px',
  },
  image: {
    width: '300px',
    height: 'auto',
    marginBottom: '20px',
  },
  subTitle: {
    fontSize: '2.5rem',
    color: '#006400',
    marginBottom: '10px',
  },
  giftText: {
    fontSize: '2rem',
    color: '#333333',
    marginBottom: '30px',
  },
  button: {
    fontSize: '1.2rem',
    padding: '10px 20px',
    backgroundColor: '#b30000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  unavailableMessage: {
    fontSize: '1.2rem',
    color: '#666666',
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  // Modal Styles
  modalOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    position: 'relative' as const,
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    maxWidth: '400px',
    textAlign: 'center' as const,
  },
  closeButton: {
    position: 'absolute' as const,
    top: '10px',
    right: '10px',
    fontSize: '3rem',
    color: '#b30000',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '15px',
    borderRadius: '8px',
  },
  modalText: {
    fontSize: '1.2rem',
    color: '#2b2d42',
  },
};
