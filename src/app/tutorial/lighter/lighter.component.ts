import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/color-lib/color';

@Component({
  selector: 'app-lighter',
  templateUrl: './lighter.component.html'
})
export class LighterComponent implements OnInit {

  public colorNames = [];
  public omninetColor = Color.fromHex('#009FE3');

  constructor() { }

  ngOnInit() {
    this.colorNames = Color.WebColors()
      .filter((c) => c.isDark())
      .sort((c1, c2) => c1.toHexString().localeCompare(c2.toHexString()));
  }

  getLighter(color: Color): Color[] {

    const arr = [];
    let c = color;

    for (let n = 10; n < 101; n += 10) {
      c = Color.fromHex(c.toHexString());
      arr.push(c.lighter(n));
    }

    return arr;
  }
}
