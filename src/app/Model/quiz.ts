import { Question } from './question';
export class Quiz{
    id:number;
    title:String;
    timing:number;
    note:number;
    questions:Array<Question>;
}