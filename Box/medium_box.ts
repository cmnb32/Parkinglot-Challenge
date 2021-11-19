
import { VehicleType } from '../auxiliar/enums';
import {ParkingBox} from './parking_box';
import { Vehicle } from "../class/vehicle";

export class MediumBox extends ParkingBox {
vehicle2: Vehicle;

    constructor(
        id: number,
        size: number,
        vehicle: Vehicle,
        vehicle2: Vehicle){
            super(id, size, vehicle);
            this.vehicle2 = vehicle2;
        };

    getVehicle2(): Vehicle{
        return this.vehicle2;
    }

    setVehicle2(vehicle2: Vehicle){
        this.vehicle2 = vehicle2;
    }
}