import { useState } from 'react'
import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXPlaying, setisXPlaying] = useState(true)
  const handleClick = (i)=>{
    if(board[i]||checkWinner(board)) return
    const newBoard= [...board]
    newBoard[i]=isXPlaying?'X':'O'
    setBoard(newBoard)
    setisXPlaying(!isXPlaying)
  }

  const reset = ()=>{
    setBoard(Array(9).fill(null))
  }

  return (
    (
      <div style={{ textAlign: "center" }}>
        <h1>Tic-Tac-Toe</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 100px)", gap: "5px" }}>
          {board.map((cell, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              style={{ width: "100px", height: "100px", fontSize: "24px" }}
            >
              {cell}
            </button>
          ))}
        </div>
        <h2>{checkWinner(board) ? `Winner: ${checkWinner(board)}` : `Next Player: ${isXPlaying?'X':'O'}`}</h2>
        <button onClick={()=>reset()}style={{ marginTop: "10px", padding: "10px" }}>Restart</button>
      </div>
    )
  )
}

const checkWinner = (board)=>{
  const winnnerCases = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  for(let[a,b,c] of winnnerCases){
    if(board[a]&&board[a]==board[b]&&board[b]==board[c]){
      return board[a]
    }
  }
  return null
}

export default App
