import { Component, OnInit, ViewEncapsulation,HostListener , HostBinding,ViewChild,Directive,forwardRef,Inject,Output,EventEmitter} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup,FormBuilder,NG_VALIDATORS,AbstractControl,ValidatorFn,ValidationErrors} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { slideInDownAnimation } from '../animations';
import {php} from "../php.service";
import {User} from "../models/User";
import {MatStep,MatDialog,MatDialogRef,MatProgressSpinner,MatChipList,MatChip} from "@angular/material";


import {Location} from "@angular/common";
import {SharedService} from "../SharedService";




@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [slideInDownAnimation],
})

export class AddComponent implements OnInit {


    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';


    @ViewChild('as') stepper;


    basic:FormGroup;
    members:FormGroup;

    users:User[]=[];
    selected_users= [];

    all:User[];

    task = [];

    search:string;

    depts = [
        {
            name: "Mechanical Engineering",
            value: {id:"1",name:"Mechanical Engineering"}
        },
        {
            name: "Electronics And Communication Engineering",
            value: {id:"2",name:"Electronics And Communication Engineering"}
        },
        {
            name: "Electrical And Electronics Engineering",
            value: {id:"3",name:"Electrical And Electronics Engineering"}
        },
        {
            name: "Computer Science Engineering",
            value: {id:"4",name:"Computer Science Engineering"}
        },
        {
            name: "Information Technology",
            value: {id:"5",name:"Information Technology"}
        },
        {
            name: "Civil Engineering",
            value: {id:"6",name:"Civil Engineering"}
        },
        {
            name: "Mechatronics",
            value: {id:"7",name:"Mechatronics"}
        },
    ];


    subjectCtrl = new FormControl('', Validators.required);
    descCtrl = new FormControl('', Validators.required);
    deptCtrl = new FormControl('', Validators.required);

    startCtrl = new FormControl('',Validators.required);
    dueCtrl = new FormControl('',Validators.required);

    data:{};

    constructor(private formBuilder:FormBuilder, private php:php,private location : Location,private dialog:MatDialog,private shared:SharedService) {

    }

    ngOnInit() {




        this.basic = new FormGroup({
            subject: this.subjectCtrl,
            description: this.descCtrl,
            department: this.deptCtrl,
            start_date:this.startCtrl,
            due_date:this.dueCtrl
        },
            AddComponent.dateValidator
        );

        this.members = new FormGroup({

        });

        this.php.getAllUsers().subscribe(
            res=> {
                this.all = res.members;
                this.all.sort((a:User, b:User)=>a.username.localeCompare(b.username));
                this.users = this.all;

                for(var i=0;i<100;i++){
                    this.users.push(this.all[0]);
                }
                this.sortUsers();
            }
        );

    }

    filter() {




        console.log(this.members.errors);

        if (this.search.length != 0) {
            this.users = this.all.filter(this.matchByName, this);
            this.sortUsers();
        }
        else {
            this.users = this.all;
        }
    }


    sortUsers() {
        this.users.sort((a:User, b:User)=>a.username.localeCompare(b.username));
    }

    matchByName(u:User) {
        return !!(u.username.toLowerCase().search(this.search.toLowerCase()) != -1 && this.selected_users.indexOf(u) == -1);
    }

    remove(u:User) {

    }

    selectUser(u:User,i:number) {
        this.selected_users.push({user:u,task:""});
        this.users.splice(i,1);

    }

    unselectUser(u:User,i:number) {
        this.selected_users.splice(i,1);
        this.users.push(u);
        this.sortUsers();

    }

    setData(){
        this.data = this.basic.getRawValue();
        this.data["start_date"]=this.data["start_date"].toLocaleDateString();
        this.data["due_date"]=this.data["due_date"].toLocaleDateString();
        this.data['members'] = this.selected_users;
    }

    createEvent(){

        this.setData();

        console.log(this.data);

        console.log(new Date(this.data["start_date"]).toLocaleDateString());

        let d = this.dialog.open(LoadDialog,{
            disableClose:true
        });

        d.afterClosed().subscribe((r)=>{

        });


        this.php.createEvent(this.data).subscribe((r)=>{
            console.log(r);
            this.shared.emitEventCreated();
        });
    }


    userSelectionValidator(g: FormGroup ,s:any[]): ValidationErrors | null {

    console.log("tr :"+s);

    return (s && s.length>0) ? null : { user_select : true};

    }


    static dateValidator(g: FormGroup): ValidationErrors | null {

     return g.get('start_date').value < g.get('due_date').value? null : { dateValidator : true};

    }


}


@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'load-dialog.html',
})
export class LoadDialog {

    constructor(public dialogRef:MatDialogRef<LoadDialog>) {
    }

    closeDialog():void {
        this.dialogRef.close('');
    }

}

