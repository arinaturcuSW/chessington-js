import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    private hasMoved: boolean;

    public constructor(player: Player) {
        super(player);
        this.hasMoved = false;
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        const moves: Square[] = [];

        const direction: number = this.player === Player.WHITE ? +1 : -1;

        if (board.isMoveValid(currentPos.row + direction, currentPos.col) && board.isSquareAvailable(currentPos.row + direction, currentPos.col)){
            moves.push(new Square(currentPos.row + direction, currentPos.col));
        }

        if (
            !this.hasMoved &&
            board.isSquareAvailable(currentPos.row + 2 * direction, currentPos.col) &&
            board.isSquareAvailable(currentPos.row + direction, currentPos.col))
        {
            moves.push(new Square(currentPos.row + 2 * direction, currentPos.col));
        }

        return moves;
    }

    public moveTo(board: Board, newSquare: Square) {
        super.moveTo(board, newSquare);
        this.hasMoved = true;
    }
}
