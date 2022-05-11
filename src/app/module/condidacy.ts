
import { JobOffer } from "./JobOffer";
import { User } from "./User";

enum Type{
    	JOB,
	EDUCATION
}
export class Condidacy{
id!:number;
created_at!:Date;
state!:string;
type!:Type;
score!:number;
interview_date!:Date;
module!:string;
user!:User;
jobOffer!:JobOffer;


}