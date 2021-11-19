import {Vehicle} from './vehicle';
import { VehicleType } from '../auxiliar/enums';
import {ParkingBox} from '../Box/parking_box';

export class Van extends Vehicle {
    constructor(
        id: string, 
        type: VehicleType, 
        size: number){
            super(id, type, size);
        };
}