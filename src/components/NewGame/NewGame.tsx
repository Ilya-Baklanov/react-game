import React from 'react';

import { State, Props } from './NewGame.model';
import styles from './style.scss';

class NewGame extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { newGame } = this.props;
    return (
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
  }
}

export default NewGame;
