import { Cell } from './GridCell.model';

type Matrix = Cell[][];

type Props = {

};

type State = {
  matrix: Matrix;
  mute: boolean;
  score: number;
};

export {
  Matrix,
  Props,
  State,
};
