import { Partner } from "./Parter";

enum Name{
    Informatique,Economique,Medecine,Mecanique
}

enum Traitement{
    Automatique,Manuelle
}


export class Module{

    id!:number
   capacity:number
    nbreInscription!:number
    name:Name
    traitement:Traitement
    partner!:Partner




}