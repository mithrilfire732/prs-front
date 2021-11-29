export class Product2 {
    id: number;
    partNbr: string;
    name: string;
    price: number;
    unit: number;
    photoPath: string;
    vendorId: number;

    constructor(id: number, partNbr: string, name: string, price: number, unit: number, photoPath: string, vendorId: number){
        this.id = id;
        this.partNbr = partNbr;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
        this.vendorId = vendorId;
    }
}
