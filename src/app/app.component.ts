import { Component } from '@angular/core';
import { Color } from './color-lib/color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-colorfunctions';

  // public colors: Color[] = [
  //   new Color('rgb(255, 255, 255)'),
  //   new Color('rgb(236, 255, 96)'),
  //   new Color('rgb(201, 220, 163)'),
  //   new Color('rgb(166, 216, 222)'),
  //   new Color('rgb(255, 0, 0)'),
  //   new Color('rgb(5, 48, 126)'),
  //   new Color('rgb(64, 64, 64)'),
  //   new Color('rgb(6, 12, 131)'),
  //   new Color('rgb(0, 0, 0)')
  // ];

  constructor() {

    // const col = new Color('rgb(0, 206, 209)');

    // for (let index = 0; index < 100; index += 5) {
    //   col.darker(index);
    //   console.log(index + '%', col.toHexString());
    // }

  }

}
