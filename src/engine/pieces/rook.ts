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

        let distance = [1, 2, 3, 4, 5, 6, 7, 8];
        let direction = [-1, 0, 1];

        distance.forEach(dist => {
            direction.forEach(dirRow => {
                direction.forEach(dirCol => {
                    if (dirCol * dirRow !== 0 || dirCol + dirRow === 0) {
                        return;
                    }

                    if (board.isMoveValid(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        moves.push(new Square(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol));
                    }
                })
            });
        });

        return moves;
    }
}
