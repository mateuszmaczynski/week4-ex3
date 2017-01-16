import {Sprite} from './Sprite';

export class Brick extends Sprite {

    livesLeft: number = 1;
    wasHitted(): boolean {
        return --this.livesLeft < 1;
    }
    markHitted() {
        
    }

}