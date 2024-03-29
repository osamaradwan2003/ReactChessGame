export default class ChessGame {
  public theme: ThemeSettings;

  constructor(themeName: ThemeName) {
    this.theme = new ThemeSettings(themeName);
  }
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

export class ThemeSettings {
  private PiecePrefixImageUrl: string;
  private PiecePostfixImageUrl: string;
  private boardColors: AvailableBoardColors;
  private themeBoardColor;
  constructor(pieceThemeName: ThemeName = "brown_shadow") {
    this.boardColors = availableBoardColors;
    this.PiecePostfixImageUrl = ".svg";
    this.PiecePrefixImageUrl = pieceThemeName.toLocaleLowerCase().includes("no")
      ? "./assets/pieces/noShadow/"
      : "./assets/pieces/shadow/";
    this.themeBoardColor = pieceThemeName.split("_")[0];
  }

  getPieceImage(name: string): string {
    let color = name?.match("[A-Z]+") ? "w" : "b";
    name = name?.toLowerCase();
    return (
      this.PiecePrefixImageUrl + color + "_" + name + this.PiecePostfixImageUrl
    );
  }

  getBoardColor(): BoardColor {
    return this.boardColors[this.themeBoardColor];
  }
}
