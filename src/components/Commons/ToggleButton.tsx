import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const ToggleButton = (): JSX.Element => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [darkModeState, setDarkModeState] = useState<string>('dark');
  const addAttributeId = (): void => {
    document.body.id = darkModeState;
  };
  const toggleDarkMode = (checked: boolean): void => {
    setDarkMode(checked);
    setDarkModeState(checked ? 'light' : 'dark');
    addAttributeId();
  };

  return (
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={20}
    />
  );
};

export default ToggleButton;
