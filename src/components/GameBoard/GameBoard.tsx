/* eslint-disable no-void */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-fallthrough */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import { cloneDeep } from 'lodash';
import React from 'react';
import rotateMatrix from 'rotate-matrix';

import { Matrix, Props, State } from '@/components/GameBoard/GameBoard.model';
import { Cell, ICell } from '@/components/GameBoard/GridCell.model';

import MuteButton from '../MuteButton/MuteButton';
import NewGame from '../NewGame/NewGame';
import Score from '../Score/Score';

import GridCell from './GridCell';
import styles from './style.scss';

class GameBoard extends React.Component<Props, State> {
  cellSound = new Audio('../../assets/sound/cellSound.mp3');

  loserLaugh = new Audio('../../assets/sound/loserLaugh.mp3');

  constructor(props: Props) {
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
      mute: false,
      score: 0,
    };

    this.newGame = this.newGame.bind(this);
    this.randomRowIndex = this.randomRowIndex.bind(this);
    this.randomColumnIndex = this.randomColumnIndex.bind(this);
    this.randomCell = this.randomCell.bind(this);
    this.calc = this.calc.bind(this);
    this.removeEmptyCell = this.removeEmptyCell.bind(this);
    this.motion = this.motion.bind(this);
    this.scoreCounter = this.scoreCounter.bind(this);
    this.soundHandler = this.soundHandler.bind(this);
    this.muteToggle = this.muteToggle.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', (e:any) => {
      const { matrix } = this.state;
      this.setState({ matrix: this.motion(e.key, matrix) });
    });
    this.newGame();
  }

  soundHandler = (type: string): void => {
    // const [play] = useSound(cellSound);
    const { mute } = this.state;
    if (!mute) {
      if (type === 'cell-motion') {
        void this.cellSound.play();
      }
      if (type === 'fail') {
        void this.loserLaugh.play();
      }
    }
  };

  randomRowIndex = (motionType?: string): number => {
    let row = null;
    switch (motionType) {
      case 'ArrowDown': {
        row = Math.floor(Math.random() * 3);
        break;
      }
      case 'ArrowUp': {
        row = Math.floor(Math.random() * 3) + 1;
        break;
      }
      case 'ArrowLeft': {
        row = Math.floor(Math.random() * 4);
        break;
      }
      case 'ArrowRight': {
        row = Math.floor(Math.random() * 4);
        break;
      }
      default: row = Math.floor(Math.random() * 4);
    }
    return row;
  };

  randomColumnIndex = (motionType?: string): number => {
    let column = null;
    switch (motionType) {
      case 'ArrowDown': {
        column = Math.floor(Math.random() * 4);
        break;
      }
      case 'ArrowUp': {
        column = Math.floor(Math.random() * 4);
        break;
      }
      case 'ArrowLeft': {
        column = Math.floor(Math.random() * 3) + 1;
        break;
      }
      case 'ArrowRight': {
        column = Math.floor(Math.random() * 3);
        break;
      }
      default: column = Math.floor(Math.random() * 4);
    }
    return column;
  };

  randomCell = (matrix: Matrix, motionType?: string): void => {
    if (matrix.flat().map(el => el?.value).includes(0)) {
      const randomRow = this.randomRowIndex(motionType);
      const randomColumn = this.randomColumnIndex(motionType);
      matrix[randomRow][randomColumn]?.value === 0
        ? matrix[randomRow][randomColumn]!.value = 2
        : this.randomCell(matrix, motionType);
    } else {
      this.soundHandler('fail');
      alert('YOU LOOOOOOOOOSE');
      this.newGame();
    }
  };

  private scoreCounter = (increment: number) => {
    const { score } = this.state;
    this.setState({ score: score + increment });
  };

  calc = (arr: any[]): any[] => {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (i === 0) {
        return arr;
      }
      if (arr[i].value === arr[i - 1].value) {
        arr[i].value += arr[i - 1].value;
        this.scoreCounter(arr[i].value);
        arr[i - 1].value = 0;
      }
      if (arr[i - 1].value === 0
        && arr[i - 2] !== undefined
        && arr[i].value === arr[i - 2].value
      ) {
        arr[i].value += arr[i - 2].value;
        this.scoreCounter(arr[i].value);
        arr[i - 2].value = 0;
      }
      if (arr[i - 1].value === 0
          && arr[i - 2] !== undefined
          && arr[i - 2].value === 0
          && arr[i - 3] !== undefined
          && arr[i].value === arr[i - 3].value
      ) {
        arr[i].value += arr[i - 3].value;
        this.scoreCounter(arr[i].value);
        arr[i - 3].value = 0;
      }
    }
    return arr;
  };

  removeEmptyCell = (arr: Cell[]): Cell[] => {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1]!.value === 0 && arr[i]!.value !== 0) {
        const nextCell = cloneDeep(arr[i + 1]);
        const currentCell = cloneDeep(arr[i]);
        arr[i + 1] = currentCell;
        arr[i] = nextCell;
        i = 0;
      }
    }
    return arr;
  };

  motion = (motionType: string, matrix: Matrix): Matrix => {
    let rotateType: number;
    switch (motionType) {
      case 'ArrowDown': {
        rotateType = -1;
        break;
      }
      case 'ArrowUp': {
        rotateType = 1;
        break;
      }
      case 'ArrowLeft': {
        rotateType = 2;
        break;
      }
      case 'ArrowRight': {
        rotateType = 4;
        break;
      }
      default: rotateType = 4;
    }
    const rotationMatrix = rotateMatrix(matrix, rotateType);
    const normalMatrix = rotateMatrix(rotationMatrix.map((cells: Cell[], rowIndex: number) => {
      const amountCellValues = this.calc(cells
        .map((cell: Cell) => ({ value: cell.value, id: cell.id })));
      return this.removeEmptyCell(
        amountCellValues.map((cell: any, columnIndex: number) => ({
          row: rowIndex,
          column: columnIndex,
          value: cell.value,
          id: cell.id,
        }))
      );
    }), -rotateType);

    this.randomCell(normalMatrix, motionType);
    this.soundHandler('cell-motion');
    return normalMatrix;
  };

  newGame = (): void => {
    const { matrix } = this.state;
    const newMatrix = matrix.map((elem: Cell[]) => elem.map((el: Cell) => ({
      row: el.row,
      column: el.column,
      id: el.id,
      value: 0,
    })));
    this.randomCell(newMatrix);
    this.randomCell(newMatrix);
    this.setState({
      matrix: newMatrix,
    });
  };

  muteToggle = (): void => {
    const { mute } = this.state;
    this.setState({ mute: !mute });
  };

  render() {
    const { matrix, mute, score } = this.state;
    const { muteToggle } = this;
    return (
      <React.Fragment>
        <div className={styles['user-panel']}>
          <NewGame newGame={() => this.newGame()} />
          <MuteButton muteToggle={muteToggle} isMute={mute} />
          <Score score={score} />
        </div>
        <div className={styles['grid-container']}>
          {
            matrix.flat().map(({
              row, column, id, value,
            }: ICell) => (
              <React.Fragment key={id}>
                <div className={styles['grid-cell-background']}>
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
