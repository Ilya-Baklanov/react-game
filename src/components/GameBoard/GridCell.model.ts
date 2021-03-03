interface ICell {
  row: number;
  column: number;
  id: number;
  value: number;
}

type Cell = ICell | null;

type Props = {
  innerNumber: number;
  row: number;
  column: number;
};

type Style = {
  transform: string;
  backgroundColor: string;
};

type State = {
  style: Style;
};

export {
  ICell,
  Cell,
  Props,
  Style,
  State,
};
