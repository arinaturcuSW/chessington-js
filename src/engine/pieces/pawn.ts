import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);

        if (this.player === Player.WHITE) {
            return [
                new Square(currentPos.row + 1, currentPos.col - 1),
                new Square(currentPos.row + 1, currentPos.col),
                new Square(currentPos.row + 1, currentPos.col + 1),
            ];
        }

        return [
            new Square(currentPos.row - 1, currentPos.col - 1),
            new Square(currentPos.row - 1, currentPos.col),
            new Square(currentPos.row - 1, currentPos.col + 1),
        ];
    }
}
