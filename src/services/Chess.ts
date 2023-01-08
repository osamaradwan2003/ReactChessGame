export default class Chess {
  private list_history: Array<(ChessPiece | null)[][]> = [];
  private boardState: (ChessPiece | null)[][] = [];
  private notionXKeys: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
  private notionYKeys: string[] = ["1", "2", "3", "4", "5", "6", "7", "8"];
  initialGame(): (ChessPiece | null)[][] {
    this.boardState = [
      [
        { type: "rook", color: "b" },
        { type: "knight", color: "b" },
        { type: "bishop", color: "b" },
        { type: "queen", color: "b" },
        { type: "king", color: "b" },
        { type: "bishop", color: "b" },
        { type: "knight", color: "b" },
        { type: "rook", color: "b" },
      ],
      [
        { type: "pawn", color: "b" },
        { type: "pawn", color: "b" },
        { type: "pawn", color: "b" },
        { type: "pawn", color: "b" },
        { type: "pawn", color: "b" },
        { type: "pawn", color: "b" },
        { type: "pawn", color: "b" },
        { type: "pawn", color: "b" },
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        { type: "rook", color: "w" },
        { type: "knight", color: "w" },
        { type: "bishop", color: "w" },
        { type: "queen", color: "w" },
        { type: "king", color: "w" },
        { type: "bishop", color: "w" },
        { type: "knight", color: "w" },
        { type: "rook", color: "w" },
      ],
      [
        { type: "pawn", color: "w" },
        { type: "pawn", color: "w" },
        { type: "pawn", color: "w" },
        { type: "pawn", color: "w" },
        { type: "pawn", color: "w" },
        { type: "pawn", color: "w" },
        { type: "pawn", color: "w" },
        { type: "pawn", color: "w" },
      ],
    ];
    this.list_history.push(this.boardState);
    return this.boardState;
  }

  parseNotation(text: string) {}

  // convert j, y to notation index
  toPosition(
    i: number /* row Index */,
    j: number /* cell Index*/
  ): NotationIndex {
    return { x: this.notionXKeys[i], y: this.notionYKeys[j] };
  }
  toNotation(index: NotationIndex): [number, number] {
    const i: number = this.notionXKeys.indexOf(index.x);
    const j: number = this.notionYKeys.indexOf(index.y);
    return [i, j];
  }

  public swap(
    i1: number,
    j1: number,
    i2: number,
    j2: number
  ): (ChessPiece | null)[][] {
    const tempValue = this.boardState[i1][j1];
    this.boardState[i1][j1] = null;
    this.boardState[i2][j2] = tempValue;
    this.list_history.push(this.boardState);
    return this.boardState;
  }
}
