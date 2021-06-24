import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-material';
  
  percent = 0;
  showSpinner = false ;

  color = "accent"

  loadData1() {
    setInterval(() => {
      this.percent = this.percent + 1;
    }, 1000);
  }

  loadData2() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false
    }, 5000);
  }

}
