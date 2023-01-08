
import { useDrag } from "react-dnd"


export default function ChessPiece(props: PieceProps) {
  const [{ isDragging }, drag, dragPreview] = useDrag(()=>({
    type: "piece",
    item: {
      position: props.position
    },
    collect: (monitor)=> {
      return{
        isDragging: monitor.isDragging()
      }
    }
  }));

  return isDragging ?
  (
    <div
      style={{
            backgroundImage: `url("${props.image}")`,
            width: "100%",
            height:" 100%",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            cursor: "pointer",
        }}
    ></div>
  ) 
  :(
    <>
      {
        props.image && <div
        ref={drag}
        style={{
            backgroundImage: `url("${props.image}")`,
            width: "100%",
            height:" 100%",
            backgroundSize: "70%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            cursor: "pointer",
        }}
        >
        </div>
      }
    </>
  )
}
