import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name:string = 'Marvellous Infosystems';

  public fun()
  {
    
    this.name="Button Clicked";
  }
  
}