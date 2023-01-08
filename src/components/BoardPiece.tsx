import { useState, useEffect } from "react";
import { useDrop } from "react-dnd/dist/hooks";

export default function BoardPiece(props: BoardPiece) {
  let pieceProps = props.pieceProps
  let  position = pieceProps.index;
  let value = props.children;
  const [collected, drop] = useDrop(()=>({
    accept: "piece",
    drop(item: {[position: string]: Array<number>}){
      props.movFunction(item.position[0], item.position[1], pieceProps.index.x, pieceProps.index.y)
    }
  }))
  return (
      <div 
        ref={drop}
        style={{
          width : pieceProps.width,
          height : pieceProps.height,
          backgroundColor: pieceProps.color,
        }}
        className="chess-board-pace"
      >
        {value}
      </div>
  );
}
