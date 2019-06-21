import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/color-lib/color';

@Component({
  selector: 'app-darker',
  templateUrl: './darker.component.html'
})
export class DarkerComponent implements OnInit {

  public omninetColor = Color.fromHex('#009FE3');
  public colorNames = [];

  constructor() { }

  ngOnInit() {
    this.colorNames = Color.WebColors()
      .filter((c) => !c.isDark())
      .sort((c1, c2) => c2.toHexString().localeCompare(c1.toHexString()));
  }

  getDarker(color: Color): Color[] {

    const arr = [];
    let c = color;

    for (let n = 10; n < 101; n += 10) {
      c = Color.fromHex(c.toHexString());
      arr.push(c.darker(n));
    }

    return arr;

  }

}
