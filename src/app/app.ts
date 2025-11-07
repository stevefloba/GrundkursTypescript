import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('GrundkursTypescript');

  theArray: (number | string)[] = [1,2];

  constructor() {
    this.theArray = [1,'6']
    this.add(1,2);
  }

  add(a:number,b:number){
    return a + b;
  }

}
