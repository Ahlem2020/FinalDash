import { RepQuestion } from './repQuestion';
import { TypeQ } from './typeQ';
import { Quiz } from 'src/app/Model/quiz';
export class Question{
    id:number;
    question:String;
    op3:String;
    op1:String;
    op2:String;
    op4:String;
    writedResponse:String; 
    reponse:String;
    time:number;
    quiz:Quiz;
   

    
    
}
