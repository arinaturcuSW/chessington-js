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

        let distance = [1, 2, 3, 4, 5, 6, 7];
        let direction = [-1, 1];
        let shouldBreak = false;

        direction.forEach(dirRow => {
            direction.forEach(dirCol => {
                shouldBreak = false;
                distance.forEach(dist => {
                    if (shouldBreak || !board.isMoveValid(currentPos.row + dist * dirRow, currentPos.col + dist * dirCol)) {
                        return
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
