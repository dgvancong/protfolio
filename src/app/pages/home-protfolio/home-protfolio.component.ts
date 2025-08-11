import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-protfolio',
  templateUrl: './home-protfolio.component.html',
  styleUrls: ['./home-protfolio.component.scss']
})
export class HomeProtfolioComponent implements OnInit {

  isLoading = true;
  isOpening = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isOpening = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }, 5000);
  }
}
