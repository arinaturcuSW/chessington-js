import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

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

        // diagonal hunt
        const squareDiagLeft = new Square(currentPos.row + direction, currentPos.col - 1);
        const squareDiagRight = new Square(currentPos.row + direction, currentPos.col + 1);

        const leftPiece = board.isMoveValid(squareDiagLeft.row, squareDiagLeft.col) ? board.getPiece(squareDiagLeft) : undefined;
        if (leftPiece && leftPiece.player !== this.player && !(leftPiece instanceof King)) {
            moves.push(squareDiagLeft);
        }

        const rightPiece = board.isMoveValid(squareDiagLeft.row, squareDiagLeft.col) ? board.getPiece(squareDiagRight) : undefined;
        if (rightPiece && rightPiece.player !== this.player && !(rightPiece instanceof King)) {
            moves.push(squareDiagRight);
        }

        if (
            !this.hasMoved &&
            board.isMoveValid(currentPos.row + 2 * direction, currentPos.col) &&
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
