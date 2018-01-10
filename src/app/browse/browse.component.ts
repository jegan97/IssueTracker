import { Component, OnInit, ViewEncapsulation, HostBinding  } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import {DatePipe,Location} from "@angular/common"
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder,NG_VALIDATORS,AbstractControl,ValidatorFn,ValidationErrors} from '@angular/forms';

import {MatStep,MatDialog,MatDialogRef,MatProgressSpinner,MatChipList,MatChip,MatCheckbox,MatCheckboxChange} from "@angular/material";
import {php} from "../php.service";
import {Router,ActivatedRoute} from "@angular/router";



@Component({
    selector: 'app-browse',
    templateUrl: './browse.component.html',
    styleUrls: ['./browse.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [slideInDownAnimation]
})
export class BrowseComponent implements OnInit {

    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';

    depts = [
        {
            name: "Mech",
            value: {id:"1",name:"Mechanical Engineering"}
        },
        {
            name: "ECE",
            value: {id:"2",name:"Electronics And Communication Engineering"}
        },
        {
            name: "EEE",
            value: {id:"3",name:"Electrical And Electronics Engineering"}
        },
        {
            name: "CS",
            value: {id:"4",name:"Computer Science Engineering"}
        },
        {
            name: "IT",
            value: {id:"5",name:"Information Technology"}
        },
        {
            name: "Civil",
            value: {id:"6",name:"Civil Engineering"}
        },
        {
            name: "Mechatronics",
            value: {id:"7",name:"Mechatronics"}
        },
    ];

    events:Event[] = [];
    ievents:Event[] = [];

    startCtrl = new FormControl('');
    dueCtrl = new FormControl('');
    constructor( private route: ActivatedRoute,private php:php,private router:Router) {

    }

    ngOnInit() {
        this.php.fetchEvents().subscribe(res=>{
            this.events = res["events"];
        });

        this.php.fetchEvents(true).subscribe(res=>{
            this.ievents = res["events"];
        });
    }

    openEvent(index){
        console.log(index);
        this.router.navigate(['/','home',
            {
                outlets:{
                    child:['event', { id: index , invited:false} ]
                }

            }
        ]);
    }

    openIevent(index){
        console.log(index);
        this.router.navigate(['/','home',
            {
                outlets:{
                    child:['event',{ id: index,invited:true } ]
                }

            }
        ]);
    }

}
