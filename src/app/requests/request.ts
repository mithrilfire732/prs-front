export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "Pickup";
    status: string = "New";
    total: number = 0;
    userId: number = 0;
    user: any = null;
    requestlines: any[] = [];
    constructor(){}
}
