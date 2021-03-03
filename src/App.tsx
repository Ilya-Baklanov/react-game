/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-alert */
import React from 'react';
import { connect } from 'react-redux';

import styles from './assets/stylesheets/index.scss';
import GameBoard from './components/GameBoard/GameBoard';
// import { } from './redux/actions';
// import { State } from './types/states.model';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <h1 className={styles['title']}>2048</h1>
        <div className={styles['game-container']}>
          <GameBoard />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (/* state: State */): any => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
