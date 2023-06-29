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
        let shouldBreak = false;

        directionRook.forEach(dirRow => {
            directionRook.forEach(dirCol => {
                shouldBreak = false;
                distance.forEach(dist => {
                    if (dirCol * dirRow !== 0 || dirCol + dirRow === 0 || shouldBreak) {
                        return;
                    }

                    if (!board.isMoveValid(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        return;
                    }

                    if (!board.isSquareAvailable(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        shouldBreak = true;
                        return;
                    }

                    moves.push(new Square(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol));
                })
            });
        });

        let directionBishop = [-1, 1];

        directionBishop.forEach(dirRow => {
            directionBishop.forEach(dirCol => {
                shouldBreak = false;
                distance.forEach(dist => {
                    if (shouldBreak || !board.isMoveValid(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        return;
                    }

                    if (!board.isSquareAvailable(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        shouldBreak = true;
                        return;
                    }

                    moves.push(new Square(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol));
                })
            });
        });

        return moves;
    }
}
