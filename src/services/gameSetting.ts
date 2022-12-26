export default class ChessSettings {
  // private theme: ThemeSettings = new ThemeSettings();
  // private players;
  // private playWithAi: boolean;
}

const availableBoardColors: AvailableBoardColors = {
  brown: {
    light: "#fff",
    dark: "#000",
  },
  gray: {
    light: "#ddd",
    dark: "#555",
  },
};

class ThemeSettings {
  private PiecePrefixImageUrl: string;
  private PiecePostfixImageUrl: string;
  private boardColors: AvailableBoardColors;
  private themeBoardColor;
  constructor(
    pieceThemeName: themeName = "brownShadow",
    themeBoardColor: string = "brown"
  ) {
    this.boardColors = availableBoardColors;
    this.PiecePostfixImageUrl = ".svg";
    this.PiecePrefixImageUrl = pieceThemeName.toLocaleLowerCase().includes("no")
      ? "./assets/piece/noShadow/"
      : "./assets/piece/shadow/";
    this.themeBoardColor = themeBoardColor;
  }

  getPieceImage(name: string, color: PieceColor = "white") {
    let c = color == "white" ? "l_" : "b_"; // image color
    return this.PiecePrefixImageUrl + c + name + this.PiecePostfixImageUrl;
  }

  getBoardColor(): BoardColor {
    return this.boardColors[this.themeBoardColor];
  }
}
