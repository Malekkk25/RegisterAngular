import { Role } from "./Role.model";

export class User{
    id!:number ;
    username!:string ;
    email!:string ;
    password !: string ;
    roles: Role[] | undefined;
    }