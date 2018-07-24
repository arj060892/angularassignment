import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { ValueComponent } from './value/value.component';
import { SupComponent } from './sup/sup.component';
import { BulComponent } from './bul/bul.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { BackpageComponent } from './backpage/backpage.component';
import {ApiService} from './api.service'

@NgModule({
    declarations: [
        AppComponent,
        AccountListComponent,
        ValueComponent,
        SupComponent,
        BulComponent,
        DashboardComponent,
        LoginComponent,
        BackpageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: 'value',
                component: ValueComponent
            },
            {
                path: 'sup',
                component: SupComponent,
                children: [
                    { path: 'type/:ideName', component: BulComponent }
                ]
            },
            {
                path: 'dashboard',
                component: DashboardComponent
                // data:{requireLogin:true}
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '',
                component: LoginComponent
            },

            {
                path: 'backpage/:id',
                component: BackpageComponent
            }


        ]

        )
    ],
    providers: [ApiService],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
