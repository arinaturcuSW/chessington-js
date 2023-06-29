import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentPos = board.findPiece(this);
        const moves: Square[] = [];

        const direction = [-1, 0, 1];

        direction.forEach(dirRow => {
            direction.forEach(dirCol => {
                if (dirRow === 0 && dirCol === 0) {
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
        })

        return moves;
    }
}
