import {Point} from './Point';

export class Vector extends Point {
    flipX() {
        this.x *= -1;
    }

    flipY() {
        this.y *= -1;
    }
}
