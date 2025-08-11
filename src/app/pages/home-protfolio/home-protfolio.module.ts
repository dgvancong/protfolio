import { CommonModule, DatePipe } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeProtfolioRoutingModule } from './home-protfolioRouting.module';
import { IconCustomService } from 'src/components/iconCustom/iconCustomServices.service';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeProtfolioComponent } from './home-protfolio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NzIconModule,
    HomeProtfolioRoutingModule,
  ],

  declarations: [
    HomeProtfolioComponent
  ],

  providers: [
    DatePipe,
    IconCustomService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class HomeProtfolioModule {}
