import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Daniel';
  age = 18;
  img = 'https://source.unsplash.com/random';
  btnDisable = true;
  person= {
      name:'Daniel',
      age: 18,
      avatar : 'https://source.unsplash.com/random'
  }
}
