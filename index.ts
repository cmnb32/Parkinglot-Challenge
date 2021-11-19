import { LargeBox } from "./Box/large_box";
import { MediumBox } from "./Box/medium_box";
import { SmallBox } from "./Box/small_box";
import { ParkingBox } from "./Box/parking_box";
import { Motorcycle } from "./class/motorcycles";
import { Vehicle } from "./class/vehicle";
import { VehicleType } from "./auxiliar/enums";
import { Car } from "./class/car";
import { Van } from "./class/van";


var boxes_set:ParkingBox[];
function start(){


    for (let i = 0; i < 100; i++) {
        if(i <= 70){
            boxes_set[i] = new MediumBox(i, 2, null, null);
        } else if( (i > 70) && (i < 91) ){
            boxes_set[i] = new LargeBox(i, 4, null, null);
        } else if(  (i > 90) && (i < 101) ){
            boxes_set[i]= new SmallBox(i, 1, null);
        }
    }
}

function addVehicle(vehicle: Vehicle){
    var vehicleAux: VehicleType = vehicle.getType();

    for (let x in boxes_set) {
        if(boxes_set[x].getSize() >= vehicle.getSize()){
            boxes_set[x].setSize( boxes_set[x].getSize() - vehicle.getSize());
            boxes_set[x].setVehicle(vehicle); //Por ahora sólo puede tener un vehiculo por espacio, pero la clase esta preparada para recibir más.
            break;
        }
    }

    start();

    console.log("Usage: addVehicle()");

    var moto: Motorcycle = new Motorcycle("moto" ,1 ,1);

    var car: Car = new Car("car", 2, 2)

    var van: Van = new Van("van", 3, 4)
    
    addVehicle(moto); //Cambiar el objeto por el deseado
    
    
}