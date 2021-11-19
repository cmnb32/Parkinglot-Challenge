import {Vehicle} from './vehicle';
import { VehicleType } from '../auxiliar/enums';
import {ParkingBox} from '../Box/parking_box';

export class Van extends Vehicle {
    constructor(
        id: string, 
        type: VehicleType, 
        size: number,
        box: ParkingBox){
            super(id, type, size, box);
        };
}