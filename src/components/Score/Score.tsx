import React from 'react';

import { Props } from './Score.model';
import styles from './style.scss';

const Score = ({ score }: Props): JSX.Element => (
  <React.Fragment>
    <div className={styles['score']}>
      Score:
      {' '}
      { score }
    </div>
  </React.Fragment>
);

export default Score;
