import React, { useState, useEffect } from 'react';

function DialogBox({ dialog, options, onOptionSelect }) {
  const [typedText, setTypedText] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    if (!dialog) return;

    let index = 0;
    setTypedText('');
    setShowOptions(false);

    const typeCharacter = () => {
      if (index <= dialog.length) {
        setTypedText(dialog.slice(0, index + 1)); // Append substring up to index
        index++;
        setTimeout(typeCharacter, 10); // Typing speed
      } else {
        setShowOptions(true); // Show options after typing completes
      }
    };

    typeCharacter();

    return () => {
      setTypedText('');
      setShowOptions(false);
    };
  }, [dialog]);

  return (
    <div style={styles.dialogBox}>
      <div style={styles.dialogTextContainer}>
        <p style={styles.dialogText}>{typedText}</p>
      </div>
      {showOptions && (
        <div style={styles.optionsContainer}>
          {options.map((option, index) => (
            <button
              key={index}
              style={styles.optionButton}
              onClick={() => onOptionSelect(option)}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  dialogBox: {
    position: 'absolute',
    bottom: '5%',
    left: '10%',
    right: '10%',
    height: '20%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: '2rem',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: "'MangaSpeak', sans-serif",
    zIndex: 100,
    clipPath: 'polygon(1% 2%, 99% 0%, 98% 99%, 0% 100%)', // Irregular shape
  },
  dialogTextContainer: {
    flex: 1,
    overflowY: 'auto',
    margin: '1vw 2vw 1vw 2vw',
  },
  dialogText: {
    fontSize: 'clamp(1.7vh, 1.5vw, 2.8vh)',
    lineHeight: '1.5',
    margin: 0,
  },
  optionsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  optionButton: {
    backgroundColor: '#333',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: 'clamp(1.1vh, 1vw, 2vh)',
  },
};

export default DialogBox;
