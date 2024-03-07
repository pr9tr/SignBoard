import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isloading = true;
  showSpinner = false;
  constructor(private route: Router, private _SpinnerService: ServiceService) {
    this._SpinnerService.spinner$.subscribe((data: boolean) => {
      this.showSpinner = data;
    });
  }
  Year: number = 0;

  ngOnInit() {
    debugger
    let currentYear = new Date().getFullYear();
    this.Year = currentYear;
    setTimeout(() => {
      this.isloading = false;
    }, 2000);
  }

  onclick() {
    this._SpinnerService.showSpinner();
    setTimeout(() => {
      this._SpinnerService.hideSpinner();
      this.route.navigateByUrl('/SignBoard')
    }, 100);
    
  }
}
