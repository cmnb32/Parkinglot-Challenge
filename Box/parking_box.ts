import {VehicleType} from "../auxiliar/enums";
import { Vehicle } from "../class/vehicle";

export class ParkingBox {
    protected id: number;
    protected size: number;
    protected vehicle: Vehicle;

    constructor(id: number, size: number, vehicle: Vehicle){
        this.id = id;
        this.size = size;
        this.vehicle = vehicle;
    }

    public getId(): number{
        return this.id;
    }

    public getSize(): number{
        return this.size;
    }

    public setSize(size: number){
        this.size = size;
    }

    public setVehicle(vehicle: Vehicle){
        this.vehicle = vehicle;
    }
    
    public getVehicle(){
        return this.vehicle;
    }

  }