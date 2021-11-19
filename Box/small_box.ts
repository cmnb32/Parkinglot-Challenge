
import { VehicleType } from '../auxiliar/enums';
import {ParkingBox} from './parking_box';
import {Vehicle} from '../class/vehicle';

export class SmallBox extends ParkingBox {
    constructor(
        id: number, 
        size: number,
        vehicle: Vehicle){
            super(id, size, vehicle);
        };
}