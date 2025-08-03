import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeProtfolioRoutingModule } from './home-protfolioRouting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HomeProtfolioRoutingModule
  ],

  declarations: [

  ],

  providers: [
    DatePipe,
  ],
})
export class HomeProtfolioModule {}
