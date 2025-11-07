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

  theString = "Das ist ein String";
  theNumber = 1234567890;
  theBoolean = true;

  theUndefined = undefined;
  theNull = null;


}
