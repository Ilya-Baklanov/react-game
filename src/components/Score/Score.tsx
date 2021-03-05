import React from 'react';

import { State, Props } from './Score.model';
import styles from './style.scss';

class Score extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  render() {
    const { score } = this.state;
    return (
      <React.Fragment>
        <div>
          Score: { score }
        </div>
      </React.Fragment>
    );
  }
}

export default Score;
