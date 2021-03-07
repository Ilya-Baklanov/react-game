/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-alert */
import React from 'react';

import FullScreen from './components/FullScreen/FullScreen';
import GameBoard from './components/GameBoard/GameBoard';
import styles from './style.scss';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles['app-wrapper']}>
        <header className={styles['header']}>
          <h1 className={styles['title']}>2048</h1>
          <FullScreen />
        </header>
        <div className={styles['game-container']}>
          <GameBoard />
        </div>
        <footer className={styles['footer']}>
          <a
            className={styles['git-link']}
            href="https://github.com/Ilya-Baklanov"
          >
            GitHub: Ilya-Baklanov
          </a>
          <span>2021</span>
          <a
            className={styles['link-logo']}
            href="https://rs.school/js/"
          >
            <img
              className={styles['logo']}
              src="./assets/image/rs_school_js.svg"
              alt="logo"
            />
          </a>
        </footer>
      </div>
    );
  }
}

export default App;
