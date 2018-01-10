import { Component, OnInit, ViewEncapsulation,HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {php} from "../php.service";
import { slideInDownAnimation } from '../animations';
import {Location} from "@angular/common"
import { Observable } from 'rxjs/Observable';
import {Event} from "../models/Event"
import {SharedService} from "../SharedService";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [slideInDownAnimation]
})
export class DetailComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

    e:Event;

    constructor(private route:ActivatedRoute,
                private router:Router, private php:php, private location:Location,private shared:SharedService) {
    }

    ngOnInit() {

        //this.e =  this.route.paramMap
        //     .switchMap((params: ParamMap) =>{
        //         console.log(params.get('id'));
        //        return this.php.getEvent(Number(params.get('id')))}
        //     );
        this.shared.hideAddFab();

        let id = +this.route.snapshot.paramMap.get('id');
        let i = this.route.snapshot.paramMap.get('invited');

        this.e = i === 'true' ? this.php.getIevent(id) : this.php.getEvent(id);
        console.log(this.e);

    }

    goBack() {
        this.shared.showAddFab();
        this.location.back();
    }

    updateStatus(actionid, status) {

    }

    getUsername(userid){
        return this.e.members[this.e.members.findIndex(u=>u.userid === userid)].username;
    }


    onPingclicked(actionid){

    }


    pingMail(msg){

    }

    deleteEvent(){

    }
}
