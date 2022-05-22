import React from 'react';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <p>This is react project by freecodecamp I did on my own. You can check this repository on my github <a href="https://github.com/kosserin/react-slider" target="_blank">here</a>.</p>
    </header>
  )
}

export default Header