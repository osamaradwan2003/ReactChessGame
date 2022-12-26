import React, { Component } from 'react'
import BoardPiece from '../components/BoardPiece'
import ChessPiece from '../components/ChessPiece';
const notionXKeys = ["A", "B", "C", "D", "E", "F", "G", "H"],
      notionYKeys = ["1", "2", "3", "4", "5", "6", "7", "8"];
export default class Home extends Component {
  render() {
    let boards = [];
    const image = ["./assets/board squares/square brown dark_svg.svg", "./assets/board squares/square brown light_svg.svg"]
    for(let i = 0; i <8; i++) {
      for(let j = 0; j < 8; j++) { 
        boards.push(
          <BoardPiece 
            key={Date.now() * (i+1 + j)}
            width="60px" 
            height="60px"
            bg={image[(i+j) %2 == 0 ? 0 : 1]}
            index={{x: (8-i).toString(), y: notionXKeys[j]}}
          >
            <ChessPiece />
          </BoardPiece>
        );
      }
    }

    return (
      <div className='boarder-container grid'>
        <div className='y-notion'>
          {
            notionYKeys.map((v)=>{
              return <span>{v}</span>
            })
          }
        </div>
        <div className='grid' style={{gridTemplateColumns: "repeat(8, 60px)"}}>
          {
            boards
          }
        </div>
        <div className='x-notion'>
          {
            notionXKeys.map((v)=>{
              return <span>{v}</span>
            })
          }
        </div>
      </div>
    );
  }
}
