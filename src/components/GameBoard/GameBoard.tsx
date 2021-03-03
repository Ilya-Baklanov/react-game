/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-self-assign */
/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';

import { motion, randomCell } from '@/Logic/logicGame';

import NewGame from '../NewGame/NewGame';

import { State } from './GameBoard.model';
import GridCell from './GridCell';
import { Cell, ICell } from './GridCell.model';
import styles from './style.scss';

class GameBoard extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      matrix: [
        [
          {
            row: 1, column: 1, id: 1, value: 0,
          },
          {
            row: 1, column: 2, id: 2, value: 0,
          },
          {
            row: 1, column: 3, id: 3, value: 0,
          },
          {
            row: 1, column: 4, id: 4, value: 0,
          },
        ],
        [
          {
            row: 2, column: 1, id: 5, value: 0,
          },
          {
            row: 2, column: 2, id: 6, value: 0,
          },
          {
            row: 2, column: 3, id: 7, value: 0,
          },
          {
            row: 2, column: 4, id: 8, value: 0,
          },
        ],
        [
          {
            row: 3, column: 1, id: 9, value: 0,
          },
          {
            row: 3, column: 2, id: 10, value: 0,
          },
          {
            row: 3, column: 3, id: 11, value: 0,
          },
          {
            row: 3, column: 4, id: 12, value: 0,
          },
        ],
        [
          {
            row: 4, column: 1, id: 13, value: 0,
          },
          {
            row: 4, column: 2, id: 14, value: 0,
          },
          {
            row: 4, column: 3, id: 15, value: 0,
          },
          {
            row: 4, column: 4, id: 16, value: 0,
          },
        ],
      ],
    };

    this.newGame = this.newGame.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (e:any) => {
      const { matrix } = this.state;
      this.setState({ matrix: motion(e.key, matrix) });
    });
  }

  newGame() {
    const { matrix } = this.state;
    const newMatrix = matrix.map((elem: Cell[]) => elem.map((el: Cell) => ({
      row: el!.row,
      column: el!.column,
      id: el!.id,
      value: 0,
    })));
    randomCell(newMatrix);
    randomCell(newMatrix);
    this.setState({
      matrix: newMatrix,
    });
  }

  render() {
    const { matrix } = this.state;
    return (
      <React.Fragment>
        <NewGame newGame={this.newGame} />
        <div className={styles['grid-container']}>
          {
            matrix.flat().map(({
              row, column, id, value,
            }: ICell) => (
              <React.Fragment>
                <div key={id} className={styles['grid-cell-background']}>
                  <GridCell innerNumber={value} row={row} column={column} />
                </div>
              </React.Fragment>
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default GameBoard;
