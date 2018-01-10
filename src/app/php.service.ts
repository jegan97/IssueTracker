/**
 * Created by JEGAN'S BEAST on 11/19/2017.
 */
import {Injectable} from "@angular/core"
import {Http,Response, Headers, URLSearchParams, RequestOptions} from "@angular/http"

import {IsActive} from "./models/IsActive";
import {User} from "./models/User";
import {LoginRes} from "./models/LoginRes";

import {Observable} from 'rxjs';

import 'rxjs/add/operator/map';
import {FetchUsersRes} from "./models/FetchUsersRes";

import {Event} from "./models/Event"
@Injectable()
export class php{

    url = "http://localhost:6060/tce/php/";
    user:User;

    events:Event[]=[];
    ievents:Event[] = [];

     cpHeaders = new Headers({ 'Content-Type': 'application/json' });
     options = new RequestOptions({ headers: this.cpHeaders});

    constructor(private http:Http){
        this.user = null;
    }

    isActive():Observable<IsActive>{
       return this.http.get(this.url+"app.php",this.options).map((res)=>res.json());
    }

    login(email,pass):Observable<LoginRes>{

        let data = new URLSearchParams();
        data.append('email', email);
        data.append('password', pass);


       let headers = new Headers({   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' });
       let opt = new RequestOptions({ headers: headers});

        return this.http.post(this.url+"login.php",data,opt).map((res)=>res.json());
    }

    getAllUsers():Observable<FetchUsersRes>{
        return this.http.get(this.url+"fetch.php?users=1",this.options).map((res)=>res.json());
    }

    setUser(u:User){
        this.user = u;
    }

    getUser():User{
        return this.user;
    }

    createEvent(data){
         return this.http.post(this.url+"events.php",data,this.options).map((res)=>res.json());
    }

    logout(){
        this.user = null;
        this.http.post(this.url+"logout.php",null,this.options).subscribe();
    }

    fetchEvents(invited:boolean =false,search="",offset="0"){
        let e = invited?"1":"0";
        return this.http.get(this.url+"fetch.php?events="+e+"&search="+search+"&offset="+offset).map(
            (res)=>{
                if(invited)
                    this.ievents = res.json()["events"];
                else
                    this.events = res.json()["events"];
                return res.json();
            });
    }

    getEvent(index:number){
       return this.events[index];
    }

    getIevent(index:number){
        return this.ievents[index];
    }
}