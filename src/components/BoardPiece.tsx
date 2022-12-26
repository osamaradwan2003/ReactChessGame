import { useState, useEffect } from "react";

export default function BoardPiece(props: BoardProps) {
  let  position = props.index;
  let value = props.children;
  useEffect(()=>{
    
  }, [value]);
  return (
      <div 
        style={{
          width : props.width,
          height : props.height,
          backgroundImage: `url("${props.bg}")`,
          backgroundColor: "#000",
        }}
        className="chess-board-pace"
      >
        {value}
      </div>
  );
}
