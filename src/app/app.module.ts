import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EngineModule } from "./engine/engine.module";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent,
        CarComponent,
        DashboardComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        EngineModule,
        HttpModule,
        RouterModule.forRoot([
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent },
        ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
