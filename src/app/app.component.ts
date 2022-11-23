import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  result!:string;

  display(val:string)
  {
    if(val=="fox")
    {
      this.result="assets/fox.png";
    }
    if(val=="lion")
    {
      this.result="assets/lion.jpg";
    }
    if(val=="monkey")
    {
      this.result="assets/monkey.png";
    }
    if(val=="tiger")
    {
      this.result="assets/tiger.jpg";
    }
  }
}
