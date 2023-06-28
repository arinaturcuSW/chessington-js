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

        let distance = [1, 2, 3, 4, 5, 6, 7, 8];
        let direction = [-1, 1];

        distance.forEach(dist => {
            direction.forEach(dirRow => {
                direction.forEach(dirCol => {
                    if (board.isMoveValid(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        moves.push(new Square(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol));
                    }
                })
            });
        });

        return moves;
    }
}
