import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule,FormControlDirective, FormGroupDirective ,ReactiveFormsModule}   from '@angular/forms';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';


import {MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatChipsModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatDialogModule
} from "@angular/material";
import {php} from "./php.service";
import { LoginComponent } from './login/login.component';
import { IntroComponent } from './intro/intro.component';

import {ShowOnDirtyErrorStateMatcher} from "@angular/material";
import {ErrorStateMatcher} from "@angular/material";
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';
import {LoadDialog} from "./add/add.component";
import { EventComponent } from './event/event.component';
import {SharedService} from "./SharedService";


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        IntroComponent,
        HomeComponent,
        BrowseComponent,
        AddComponent,
        DetailComponent,
        LoadDialog,
        EventComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatGridListModule,
        MatCardModule,
        MatStepperModule,
        MatTabsModule,
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatTableModule,
        MatPaginatorModule,
        MatToolbarModule,
        MatListModule,
        MatChipsModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatDialogModule
    ],
    entryComponents: [LoadDialog],
    providers: [php, FormControlDirective, FormGroupDirective,
        {
        provide: ErrorStateMatcher,
        useClass: ShowOnDirtyErrorStateMatcher
        },
        SharedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
