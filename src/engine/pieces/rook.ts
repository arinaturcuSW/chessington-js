import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const moves: Square[] = [];
        const currentPos = board.findPiece(this);

        let i = 1;
        while (currentPos.col + i < 8) {
            moves.push(new Square(currentPos.row, currentPos.col + i));
            i++;
        }

        i = 1;
        while (currentPos.col - i >= 0) {
            moves.push(new Square(currentPos.row, currentPos.col - i));
            i++;
        }

        i = 1;
        while (currentPos.row + i < 8) {
            moves.push(new Square(currentPos.row + i, currentPos.col));
            i++
        }

        i = 1;
        while (currentPos.row - i >= 0) {
            moves.push(new Square(currentPos.row - i, currentPos.col));
            i++
        }

        return moves;
    }
}
