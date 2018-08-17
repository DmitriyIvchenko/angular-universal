import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [HomeRoutingModule, MDBBootstrapModule.forRoot()],
    declarations: [HomeComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
