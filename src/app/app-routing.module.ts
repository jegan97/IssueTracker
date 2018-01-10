import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {IntroComponent} from "./intro/intro.component";
import {HomeComponent} from "./home/home.component";
import {AddComponent} from "./add/add.component";
import {BrowseComponent} from "./browse/browse.component";
import {DetailComponent} from "./detail/detail.component";

const routes: Routes = [
    {
        path:'',
        component:IntroComponent
    },
    {
        path:'home',
        component:HomeComponent,
        children:[
            {
                path:'',
                component:BrowseComponent,
                pathMatch: 'full',
                outlet:'child'
            },
            {
                path:'add',
                component:AddComponent,
                outlet: 'child'
            },
            {
                path:'event',
                component:DetailComponent,
                outlet:'child'
            },

        ]
    },
    {
        path:'login',
        component:LoginComponent
    },


];

@NgModule({
    imports: [ RouterModule.forRoot(routes) , RouterModule.forChild(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}