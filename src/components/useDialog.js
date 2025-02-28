import { useState } from 'react';

export function useDialog() {
  const [dialog, setDialog] = useState(
    'Hello! My name is Hieu, or you might know me as @hueile. Welcome to my website!'
  );
  const [options, setOptions] = useState([
    { label: 'Wait! Who are you?', value: 'about' },
    { label: 'Where am I?', value: 'website' },
    { label: 'How do I contact you?', value: 'contact' },
  ]);

  const handleOptionSelect = (option) => {
    switch (option.value) {
      case 'about':
        setDialog(
          'My name is Gia Hieu Le, and I studied Computer Science at Lakehead University. I am a software developer with a passion for creating interactive experiences like this one!'
        );
        setOptions([{ label: 'I see!', value: 'back' }]);
        break;
      case 'website':
        setDialog(
          'You are on my portfolio website! Feel free to explore around. You can interact with some objects in the room to know more about me!'
        );
        setOptions([{ label: 'I see!', value: 'back' }]);
        break;
      case 'contact':
        setDialog('Feel free to reach out to me at myemail@example.com.');
        setOptions([{ label: 'Back', value: 'back' }]);
        break;
      case 'back':
        setDialog('mhmm! Anything else you would like to know?');
        setOptions([
          { label: 'Wait! Who are you?', value: 'about' },
          { label: 'Where am I?', value: 'website' },
          { label: 'How do I contact you?', value: 'contact' },
        ]);
        break;
      default:
        break;
    }
  };

  return { dialog, options, handleOptionSelect };
}
