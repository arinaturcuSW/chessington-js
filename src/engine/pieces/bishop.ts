import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        const moves: Square[] = [];

        let i = 1;
        while (currentPos.row + i < 8 && currentPos.col + i < 8) {
            moves.push(new Square(currentPos.row + i, currentPos.col + i));
            i++;
        }

        i = 1;
        while (currentPos.row - i >= 0 && currentPos.col - i >= 0) {
            moves.push(new Square(currentPos.row - i, currentPos.col - i));
            i++;
        }

        i = 1;
        while (currentPos.row + i < 8 && currentPos.col - i >= 0) {
            moves.push(new Square(currentPos.row + i, currentPos.col - i));
            i++;
        }

        i = 1;
        while (currentPos.row - i >= 0 && currentPos.col + i < 8) {
            moves.push(new Square(currentPos.row - i, currentPos.col + i));
            i++;
        }

        return moves;
    }
}
