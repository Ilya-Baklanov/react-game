import { Cell } from './GridCell.model';

type Matrix = Cell[][];

type Props = {

};

type State = {
  matrix: Matrix;
  score: number;
};

export {
  Matrix,
  Props,
  State,
};
