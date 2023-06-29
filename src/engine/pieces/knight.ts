import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";
import King from "./king";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        const moves: Square[] = [];

        const direction = [-2, -1, 1, 2];

        direction.forEach(dirRow => {
            direction.forEach(dirCol => {
                if ( dirCol + dirRow === 0 || dirCol === dirRow ) {
                    return;
                }

                const square = new Square(currentPos.row + dirRow, currentPos.col + dirCol);

                if (!board.isMoveValid(square.row, square.col)) {
                    return;
                }

                const piece: Piece | undefined = board.getPiece(square);
                if (!piece || piece?.player !== this.player && !(piece instanceof King)) {
                    moves.push(square);
                }
            })
        });

        return moves;
    }
}
