import { User } from './user';
import { Level } from './level';
import { Quiz } from 'src/app/Model/quiz';
import { Domain } from './domain';
export class Training{
    id:number;
    subject?: String;
    description: string;
    level:Level;
    startDate:Date;
    
    nbreMax:any;
    trainerName:string;
    nbreParticipation:number;
    note:number;
    nbEvaluation:number;
    domain:Domain;
    image:string;
    isCertified:any;
   
    price:number;
    duration:number;
    
    quiz:Quiz;
    learners:Array<User>;



}