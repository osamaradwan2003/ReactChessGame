abstract class MoveStatus {
  static readonly isDone = 0;
  static readonly IllegalMove = 1;
  static readonly LEAVES_PLAYER_IN_CHECk = 2;
}

export default MoveStatus;
