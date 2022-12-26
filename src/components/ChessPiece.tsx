import {useEffect, useState} from 'react'

export default function ChessPiece({pieceType = "b_p", isWhite = false}) {
  const prefix = "./assets/SVG No shadow/",
      postfix = "_svg_NoShadow.svg";
  let types = {
    b_b : "b_bishop",
    b_k: "b_king",
    b_p: "b_pawn",
    b_q: "b_queen",
    b_r: "b_rook",
    w_b: "w_bishop",
    w_k: "w_king",
    w_p: "w_pawn",
    w_q: "w_queen",
    w_r: "w_rook",
  };

  return (
    <div>
      
    </div>
  )
}
