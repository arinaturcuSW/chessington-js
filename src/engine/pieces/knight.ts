import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        const moves: Square[] = [];

        if (board.isMoveValid(currentPos.row - 2, currentPos.col -1)) {
            moves.push(new Square(currentPos.row - 2, currentPos.col - 1))
        }

        if (board.isMoveValid(currentPos.row - 2, currentPos.col + 1)) {
            moves.push(new Square(currentPos.row - 2, currentPos.col + 1))
        }

        if (board.isMoveValid(currentPos.row + 2, currentPos.col - 1)) {
            moves.push(new Square(currentPos.row + 2, currentPos.col - 1))
        }

        if (board.isMoveValid(currentPos.row + 2, currentPos.col + 1)) {
            moves.push(new Square(currentPos.row + 2, currentPos.col + 1))
        }

        ///////////

        if (board.isMoveValid(currentPos.row - 1, currentPos.col - 2)) {
            moves.push(new Square(currentPos.row - 1, currentPos.col - 2))
        }

        if (board.isMoveValid(currentPos.row - 1, currentPos.col + 2)) {
            moves.push(new Square(currentPos.row - 1, currentPos.col + 2))
        }

        if (board.isMoveValid(currentPos.row + 1, currentPos.col - 2)) {
            moves.push(new Square(currentPos.row + 1, currentPos.col - 2))
        }

        if (board.isMoveValid(currentPos.row + 1, currentPos.col + 2)) {
            moves.push(new Square(currentPos.row + 1, currentPos.col + 2))
        }

        return moves;
    }
}
