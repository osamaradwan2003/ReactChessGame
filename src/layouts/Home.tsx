import React, { Component } from 'react'
import { DndProvider } from 'react-dnd';
import BoardPiece from '../components/BoardPiece'
import ChessPiece from '../components/ChessPiece';
import Chess from '../services/Chess';
import { HTML5Backend } from 'react-dnd-html5-backend'

import ChessGame from '../services/gameSetting';
const notionXKeys = ["A", "B", "C", "D", "E", "F", "G", "H"],
      notionYKeys = ["1", "2", "3", "4", "5", "6", "7", "8"];
export default class Home extends Component<ChessGameProps, ChessGameState> {

  private gameSetting: ChessGame;
  private gameServices: Chess;
  private boardColor: BoardColor;
  constructor(props: ChessGameProps){
    super(props);
    this.gameSetting = new ChessGame("gray_shadow", {name: 'osama', isAi: false}, {name: 'Ai', isAi: true});
    this.gameServices  = new Chess();
    this.boardColor = this.gameSetting.theme.getBoardColor();
    this.state = {
      chessBoard: this.gameServices.initialGame(),
    }
  }


  move(i1:number, j1: number, i2: number,j2: number) {
    const newBoard =  this.gameServices.swap(i1, j1, i2,j2);
    this.setState({chessBoard: newBoard})
  }



  render() {
    return (
      <div className='boarder-container grid'>
        <div className='y-notion'>
          {
            notionYKeys.map((v)=>{
              return <span key={v}>{v}</span>
            })
          }
        </div>
        <div className='grid' style={{gridTemplateColumns: "repeat(8, 60px)"}}>
          <DndProvider backend={HTML5Backend}>
          {
            this.state.chessBoard.map((e, i)=>{
              return e.map((v, j)=>{
                return <BoardPiece
                  movFunction={this.move.bind(this)}
                  key={Date.now() +  (i+j) * 1000}
                  pieceProps={{
                    color: ((i+j)%2) == 0 ? this.boardColor.dark : this.boardColor.light,
                    width: 60,
                    height: 60,
                    index: {x: i, y: j}
                  }}
                >
                  <ChessPiece position={[i, j]} value={v} image={this.gameSetting.theme.getPieceImage(v?.type, v?.color)}></ChessPiece>
                </BoardPiece>
              })
            })
          }
          </DndProvider>
        </div>
        <div className='x-notion'>
          {
            notionXKeys.map((v)=>{
              return <span key={v}>{v}</span>
            })
          }
        </div>
      </div>
    );
  }
}
