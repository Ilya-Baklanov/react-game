/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-void */
import React from 'react';

import { Props, State } from './FullScreen.model';
import styles from './style.scss';

class FullScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      fullScreen: false,
    };
    this.fullScreenHandler = this.fullScreenHandler.bind(this);
  }

  fullScreenHandler() {
    const { fullScreen } = this.state;

    fullScreen
      ? void document.exitFullscreen()
      : void document.documentElement.requestFullscreen();

    this.setState({ fullScreen: !fullScreen });
  }

  render() {
    const { fullScreen } = this.state;
    return (
      <React.Fragment>
        <button
          type="button"
          className={styles['full-screen-button']}
          onClick={() => this.fullScreenHandler()}
        >
          <img
            src="../../assets/image/full_screen.png"
            alt="full screen button"
            className={
              fullScreen
                ? styles['full-screen-icon_active']
                : styles['full-screen-icon_inactive']
            }
          />
        </button>
      </React.Fragment>
    );
  }
}

export default FullScreen;
