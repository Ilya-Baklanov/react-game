import React from 'react';

import { Props } from './NewGame.model';
import styles from './style.scss';

const NewGame = ({ newGame }: Props): JSX.Element => (
  <React.Fragment>
    <button
      type="button"
      className={styles['new-game-button']}
      onClick={newGame}
    >
      New Game
    </button>
  </React.Fragment>
);

export default NewGame;
