import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        const moves: Square[] = [];

        let distance = [1, 2, 3, 4, 5, 6, 7, 8];
        let directionRook = [-1, 0, 1];

        distance.forEach(dist => {
            directionRook.forEach(dirRow => {
                directionRook.forEach(dirCol => {
                    if (dirCol * dirRow !== 0 || dirCol + dirRow === 0) {
                        return;
                    }

                    if (board.isMoveValid(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        moves.push(new Square(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol));
                    }
                })
            });
        });

        let directionBishop = [-1, 1];

        distance.forEach(dist => {
            directionBishop.forEach(dirRow => {
                directionBishop.forEach(dirCol => {
                    if (board.isMoveValid(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        moves.push(new Square(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol));
                    }
                })
            });
        });

        return moves;
    }
}
