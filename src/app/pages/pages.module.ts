import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from "../components/components.module";
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent,
        AccountSettingsComponent,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent,
        AccountSettingsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        AppRoutingModule,
        FormsModule,
        ComponentsModule,
    ]
})
export class PagesModule { }
