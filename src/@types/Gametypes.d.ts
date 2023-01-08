type BoardPiece = {
  value?: ChessPiece;
  pieceProps: BoardProps;
  children: React.Children;
  movFunction: CallableFunction;
};

type ThemeName =
  | "brown_shadow"
  | "brown_noShadow"
  | "gray_noShadow"
  | "gray_shadow"
  | "black_noShadow"
  | "black_shadow";

type PieceName =
  | "queen"
  | "bishop"
  | "knight"
  | "pawn"
  | "queen"
  | "rook"
  | "king"
  | undefined;

type BoardPieceProps = {
  width: string;
  height: string;
  index: NotationIndex;
  color: string;
};

type AvailableBoardColors = { [key: string]: BoardColor };

type BoardColor = {
  light: string;
  dark: string;
};

type NotationIndex = {
  x: string;
  y: string;
};

type PiecePower = {
  x: [];
  y: [];
};

type PieceColor = "b" | "w" | undefined;

type ChessPiece = {
  type: PieceName;
  color: PieceColor;
};

type PieceProps = {
  value?: ChessPiece | null;
  image?: string | null;
  position: [number, number];
};

interface Player {
  name: string;
  isAi: boolean;
  isWhite?: boolean;
}

type ChessGameProps = {
  theme?: string;
  isAi: boolean;
};

type ChessBoard = (ChessPiece | null)[][];

type ChessGameState = {
  chessBoard: ChessBoard;
};
