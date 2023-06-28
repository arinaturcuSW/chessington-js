import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        const moves: Square[] = [];

        const direction = [-1, 0, 1];

        direction.forEach(dirRow => {
            direction.forEach(dirCol => {
                if (dirRow === 0 && dirCol === 0) {
                    return;
                }

                if (board.isMoveValid(currentPos.row + dirRow, currentPos.col + dirCol)) {
                    moves.push(new Square(currentPos.row + dirRow, currentPos.col + dirCol));
                }
            })
        })

        return moves;
    }
}
