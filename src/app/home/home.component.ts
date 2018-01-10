import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatFab} from "@angular/material"
import {Router} from "@angular/router"
import {php} from "../php.service";

import {Location} from "@angular/common";
import {SharedService} from "../SharedService";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    username = "";
    icon="fa fa-plus"
    bg="deep-orange";

    show_fab:boolean = true;

  constructor(private router:Router,private php:php,private location : Location,private shared:SharedService) {
      this.username = this.php.getUser().username;

  }

  ngOnInit() {
        this.username = this.php.getUser().username;
      this.shared.setOnEventAdded(this.changeIcon.bind(this));
      this.shared.setHideAddFab(this.hideFab.bind(this));
      this.shared.setshowAddFab(this.showFab.bind(this));

  }

    logOut(){
        this.php.logout();
        this.router.navigate(['login']);
    }

    changeIcon(){
        if(this.icon == "fa fa-times"){
            this.location.back();
        }
        this.icon = this.icon == "fa fa-plus" ? "fa fa-times" : "fa fa-plus";
        this.bg = this.bg == "deep-orange" ? "red darken-2":"deep-orange";
    }

    showFab(){
        this.show_fab = true;
    }

    hideFab(){
        this.show_fab = false;
    }
}
