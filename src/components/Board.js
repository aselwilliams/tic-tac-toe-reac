import Square from "./Square"

const Board=()=>{
    return (
        <div className="board">
            <div className="board-row">
            <Square value={'X'} />
            <Square value={'O'} />
            <Square value={'X'} />
            </div>
            <div className="board-row">
            <Square value={'X'} />
            <Square value={'O'} />
            <Square value={'X'} />
            </div>
            <div className='board-row'>
            <Square value={'X'} />
            <Square value={'O'} />
            <Square value={'X'} />
            </div>
           
          
        </div>
    )
}
export default Board;