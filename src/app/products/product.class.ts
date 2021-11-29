import { Vendor } from "../vendors/vendor.class";

export class Product {
    id: number;
    partNbr: string;
    name: string;
    price: number;
    unit: number;
    photoPath: string;
    vendorId: number;
    vendor: Vendor;

    constructor(id: number, partNbr: string, name: string, price: number, unit: number, photoPath: string, vendorId: number, vendor: Vendor){
        this.id = id;
        this.partNbr = partNbr;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
        this.vendorId = vendorId;
        this.vendor = vendor;
    }
}
