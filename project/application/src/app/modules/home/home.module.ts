import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [HomeRoutingModule, CustomMaterialModule],
    declarations: [HomeComponent],
})
export class HomeModule {}
