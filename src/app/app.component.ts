import { Component,OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {Http,Response, Headers, URLSearchParams, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core"
import {Router} from "@angular/router"

import 'rxjs/add/operator/map'
import {php} from "./php.service";

import {MatSnackBar} from '@angular/material';

import { PlatformLocation } from '@angular/common'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent {
    title = 'app';
    members = null;

    constructor(private php:php, private router:Router, public sb:MatSnackBar, location:PlatformLocation) {
        location.onPopState(() => {
            this.nav();
        });

    }

    ngOnInit() {
        this.nav();
    }

    nav() {
        this.php.isActive().subscribe(
            res=> {
                if (res.loggedin) {
                    this.php.setUser(res.user);
                    this.router.navigate(['home']);
                }
                else {
                    this.router.navigate(['login']);
                }
            },
            err=> {
                this.sb.open("check your internet connection", "", {
                    duration: 500
                });
            }
        );
    }


}
