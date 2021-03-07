/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classNames from 'classnames';
import React, { PureComponent } from 'react';

import { State, Props } from './GridCell.model';
import styles from './style.scss';

class GridCell extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      style: {
        transform: '',
        backgroundColor: 'rgb(255, 230, 230)',
      },
    };
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.innerNumber !== this.props.innerNumber) {
      this.setState(() => {
        const { row } = this.props;
        const { column } = this.props;
        const { innerNumber } = this.props;
        return {
          style: {
            transform: `translate(${0}00px, ${0}00px)`,
            backgroundColor: `rgb(255, ${230 - innerNumber * 7}, ${230 - innerNumber * 7})`,
          },
        };
      });
    }
  }

  render() {
    const { style } = this.state;
    const { innerNumber } = this.props;
    return (
      <React.Fragment>
        <div
          className={innerNumber > 0 ? classNames(styles['grid-cell']) : ''}
          style={style}
        >
          {innerNumber > 0 ? innerNumber : null}
        </div>
      </React.Fragment>
    );
  }
}

export default GridCell;
