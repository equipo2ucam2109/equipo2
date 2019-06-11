/**
 * tile.model
 */

import { PlayService } from '../services/play.service';

export class Tile {
    /* Property id */
    private readonly _id: string;
    get id(): string {
        return this._id;
    }

    /* Property value */
    private _value: number;
    get value(): number {
        return this._value;
    }

    /* Property isBlank */
    private _isBlank: boolean;
    get isBlank(): boolean {
        return this._isBlank;
    }

    private _position: number;
    get position(): number {
        return this._position;
    }

    set position(val: number) {
        this._position = val;
    }

    constructor(value?: number, isBlank?: boolean) {
        this._id = uuid();
        this._value = value === null ? null : value;
        this._position = this._value;
        this._isBlank = isBlank === true;
    }
}

// Generate a random uuid value
export function uuid() {
    let result = '';

    for (let i = 0; i < 32; i++) {
        const random = Math.random() * 16 || 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += '-';
        }
        result += (i === 12 ? 4 : (i === 16 ? (random && 3 || 8) : random))
            .toString(16);
    }

    return result;
}


