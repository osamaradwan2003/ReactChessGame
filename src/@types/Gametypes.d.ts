type BoardPiece = {
  value: ChessPiece;
  boardImage: string;
  pieceProps: BoardProps;
};

type themeName =
  | "brownShadow"
  | "brownNoShadow"
  | "grayNoShadow"
  | "grayShadow"
  | "blackNoShadow"
  | "blackShadow";

type BoardPieceProps = {
  width: string;
  height: string;
  index: NotionIndex;
  color: string;
};

type AvailableBoardColors = { [key: string]: BoardColor };

type BoardColor = {
  light: string;
  dark: string;
};

type NotionIndex = {
  x: string;
  y: string;
};

type PiecePower = {
  x: [];
  y: [];
};

type PieceColor = "black" | "white";

type ChessPiece = {
  name: string;
  power: PiecePower;
  PiceImage: string;
  color: PieceColor;
};
