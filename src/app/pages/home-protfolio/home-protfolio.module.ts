import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeProtfolioRoutingModule } from './home-protfolioRouting.module';
import { IconCustomService } from 'src/components/iconCustom/iconCustomServices.service';
import { NzIconModule } from 'ng-zorro-antd/icon';

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

  ],

  providers: [
    DatePipe,
    IconCustomService
  ],
})
export class HomeProtfolioModule {}
