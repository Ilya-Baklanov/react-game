import React from 'react';

import { Props } from './MuteButton.model';
import styles from './style.scss';

const MuteButton = ({ muteToggle, isMute }: Props): JSX.Element => (
  <React.Fragment>
    <button
      type="button"
      onClick={muteToggle}
      className={
        isMute
          ? styles['mute_active']
          : styles['mute_inactive']
      }
    >
      Mute
    </button>
  </React.Fragment>
);

export default MuteButton;
