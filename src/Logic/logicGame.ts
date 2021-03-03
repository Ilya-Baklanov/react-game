/* eslint-disable no-fallthrough */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
import rotateMatrix from 'rotate-matrix';

import { Matrix } from '@/components/GameBoard/GameBoard.model';
import { Cell } from '@/components/GameBoard/GridCell.model';

function randomRowIndex(motionType?: string): number {
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
}

function randomColumnIndex(motionType?: string): number {
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
}

function randomCell(matrix: Matrix, motionType?: string) {
  if (matrix.flat().map(el => el?.value).includes(0)) {
    const randomRow = randomRowIndex(motionType);
    const randomColumn = randomColumnIndex(motionType);
    matrix[randomRow][randomColumn]?.value === 0
      ? matrix[randomRow][randomColumn]!.value = 2
      : randomCell(matrix, motionType);
  } else {
    alert('YOU LOOOOOOOOOSE');
  }
}

function calc(arr: any) {
  for (let i = arr.length - 1; i >= 0; i--) {
    switch (true) {
      case arr[i] === arr[i - 1]: {
        arr[i] += arr[i - 1];
        arr[i - 1] = 0;
      }
      case arr[i - 1] === 0: {
        if (arr[i] === arr[i - 2]) {
          arr[i] += arr[i - 2];
          arr[i - 2] = 0;
        }
      }
      case arr[i - 1] === 0 && arr[i - 2] === 0: {
        if (arr[i] === arr[i - 3]) {
          arr[i] += arr[i - 3];
          arr[i - 3] = 0;
        }
      }
      default: arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === 0 && arr[i] !== 0) {
      arr[i + 1] = arr[i];
      arr[i] = 0;
      i = 0;
    }
  }
  return arr;
}

function motion(motionType: string, matrix: Matrix) {
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
  const normalMatrix = rotateMatrix(rotationMatrix.map((cells: Cell[]) => {
    const amountCellValues = calc(cells.map((cell: Cell) => cell?.value));
    return amountCellValues.map((cellValue: number) => ({ row: 0, column: 0, value: cellValue }));
  }), -rotateType);

  randomCell(normalMatrix, motionType);
  return normalMatrix;
}

export {
  randomCell,
  motion,
};
