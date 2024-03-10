import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  Year: number = 0;

  ngOnInit() {
    debugger
    let currentYear = new Date().getFullYear();
    this.Year = currentYear;
  }
}
