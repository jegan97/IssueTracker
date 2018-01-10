
import {Action} from "./Action";
import {User} from "./User";
export class Event{
    public eventid:number;
    public name:string;
    public description:string;
    public start_date:Date;
    public due_date:Date;
    public status_code:number;
    public members:User[];
    public ownerid:number;
    public memids:number[];
    public department:string[];
    public departmentids:number[];
    public edit:boolean;
    public has_action=false;
    public your_action:Action;
    public actions:Action[];
    private actionids:number[];
}