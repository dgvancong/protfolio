import { Component, OnInit } from '@angular/core';

interface Partner {
  id: number;
  name: string;
  logo: string;
  colorClass: string;
}
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

  partners: Partner[] = [
    {
      id: 1,
      name: 'Html',
      logo: '/assets/image/html.png',
      colorClass: 'bitfinex'
    },
    {
      id: 2,
      name: 'Css',
      logo: '/assets/image/CSS.png',
      colorClass: 'kraken'
    },
    {
      id: 3,
      name: 'JavaScript',
      logo: '/assets/image/JavaScript.png',
      colorClass: 'valr'
    },
    {
      id: 4,
      name: 'TypeScript',
      logo: '/assets/image/Typescript.png',
      colorClass: 'bitso'
    },
    {
      id: 5,
      name: 'Angular',
      logo: '/assets/image/angular.png',
      colorClass: 'crypto-com'
    },
    {
      id: 6,
      name: 'VueJS',
      logo: '/assets/image/Vue.png',
      colorClass: 'crypto-com'
    },
    {
      id: 7,
      name: 'SCSS',
      logo: '/assets/image/scss.png',
      colorClass: 'crypto-com'
    },
    {
      id: 8,
      name: 'RxJS',
      logo: '/assets/image/RJX.png',
      colorClass: 'crypto-com'
    },
    {
      id: 9,
      name: 'NgZorro',
      logo: '/assets/image/ant-design.png',
      colorClass: 'crypto-com'
    },
    {
      id: 10,
      name: 'Bootstrap',
      logo: '/assets/image/bootstrap-logo-shadow.png',
      colorClass: 'crypto-com'
    },
    {
      id: 11,
      name: 'Tailwind',
      logo: '/assets/image/free-tailwind-icon@2x.png',
      colorClass: 'crypto-com'
    },
    {
      id: 12,
      name: 'GitHub',
      logo: '/assets/image/github.png',
      colorClass: 'crypto-com'
    },
    {
      id: 13,
      name: 'Jira',
      logo: '/assets/image/Jira-Logo.png',
      colorClass: 'crypto-com'
    },
    {
      id: 14,
      name: 'Figma',
      logo: '/assets/image/Figma-Icon.png',
      colorClass: 'crypto-com'
    },
    {
      id: 15,
      name: 'Material UI',
      logo: '/assets/image/material-ui-logo.png',
      colorClass: 'crypto-com'
    }
  ];

  get firstColumnPartners(): Partner[] {
    return this.partners.slice(0, 6);
  }

  get secondColumnPartners(): Partner[] {
    return this.partners.slice(6);
  }
}
