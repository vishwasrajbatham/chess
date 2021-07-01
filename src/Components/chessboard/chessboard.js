import React from "react"
import "./chessboard.css"
import Tile from "../tile/tile"


let board = [];

let horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"]
let verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"]

let pieces = [];
let activePiece: HTMLElement | null = null;

function grabPiece(e:React.MouseEvent){
    const element = e.target 
    if(element.classList.contains("chess-piece")){
        console.log(e);

        const x = e.clientX-35;
        const y = e.clientY-35;
        element.style.position = "absolute";
        element.style.left = `${x}px`
        element.style.top = `${y}px`

        activePiece = element;
    }
    //console.log(e.target)
}

function movePiece(e:React.MouseEvent){
    
    if(activePiece && activePiece.classList.contains("chess-piece")){
        //console.log(e);

        const x = e.clientX-35;
        const y = e.clientY-35;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x}px`
        activePiece.style.top = `${y}px`
    }
    //console.log(e.target)
}

function dropPiece(e:React.MouseEvent){
    if(activePiece){
        activePiece = null;
    }

}
for(let row=0; row<=7; row++) {    
    for(let col=0; col<=7; col++) {
        board.push(<span>
            {/* {horizontalAxis[row]} {verticalAxis[7-col]}  */}
            <Tile row={row} col={col} id={horizontalAxis[row] + verticalAxis[7-row]} /></span>)
    }
}

function Chessboard() {
    return (
        <div
          className="chessboard"
          onMouseDown={ e =>grabPiece(e)}
          onMouseMove={ e =>movePiece(e)}
          onMouseUp={ e => dropPiece(e)}
          >
            {board}
        </div>
    )
}

export default Chessboard