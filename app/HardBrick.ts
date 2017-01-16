import {Brick} from './Brick';

// task1
export class HardBrick extends Brick {

    livesLeft: number = 2;
    markHitted() {
        this.sprite.classList.add('hitted');
    }
    
}
// ---