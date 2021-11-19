import {VehicleType} from "../auxiliar/enums";
import {ParkingBox} from "../Box/parking_box";

export class Vehicle {
    protected id: string;
    protected  type: VehicleType;
    protected size: number;
    protected box: ParkingBox;

    constructor(id: string, type: VehicleType, size: number){
        this.id = id;
        this.type = type;
        this.size = size;
    }

    public getId(): string{
        return this.id;
    }

    public getType(): VehicleType{
        return this.type;
    }

    public getSize(): number{
        return this.size;
    }
  }