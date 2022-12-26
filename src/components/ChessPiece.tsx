import {useEffect, useState} from 'react'

export default function ChessPiece() {
  const prefix = "./assets/SVG with shadow/",
      postfix = "_svg_withShadow.svg";
  let piece = prefix + "b_queen" + postfix

  return (
    <div style={{
        backgroundImage: `url("${piece}")`,
        width: "100%",
        height:" 100%",
        backgroundSize: "70%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }}>
    </div>
  )
}
