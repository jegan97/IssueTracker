import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router"

import {MatFormField, MatInput, MatError ,MatToolbar,MatSnackBar} from "@angular/material"

import {FormControl, FormGroupDirective, NgForm, Validators,FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


import {php} from "./../php.service";
import {Http,Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null , form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class LoginComponent implements OnInit {

    form;

    hide = true;
    showBars = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

    passFormControl = new FormControl('', [
        Validators.required,
    ]);

    matcher = new MyErrorStateMatcher();

  constructor(public sb:MatSnackBar,private router:Router,private php:php) {

  }

  ngOnInit() {

      this.form = new FormGroup({
          email:this.emailFormControl,
          pass: this.passFormControl
      });
  }

    onSubmit(data){
        console.log(data);
        if ( !this.emailFormControl.valid || !this.passFormControl.valid ){
            this.o('please enter valid data');
        }
        else{
            this.showBars = true;
            this.php.login(data.email,data.pass).subscribe(
                res=>{
                    this.showBars = false;
                    if(res.status == 1){
                        this.php.setUser(res.user);
                        this.router.navigate(['home']);
                    }
                    else{
                        this.o(res.error);
                    }
                },
                err=>{
                    this.showBars = false
                    this.o("client side error");
                }
            );
        }
    }


    o(msg){
        this.sb.open(msg,"",{duration:1000});
    }
}
