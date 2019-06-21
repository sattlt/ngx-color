import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/color-lib/color';

@Component({
  selector: 'app-lighter-darker',
  templateUrl: './lighter-darker.component.html'
})
export class LighterDarkerComponent implements OnInit {

  public colorNames = [];
  public omninetColor = Color.fromHex('#009FE3');
  public test = Color.fromHex('#9932cc');

  constructor() { }

  ngOnInit() {
    this.colorNames = Color.WebColors()
      .sort((c1, c2) => {
        return (parseInt(c1.hex, 16) > parseInt(c2.hex, 16)) ? 1 : 0;
      });
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

  getDarker(color: Color): Color[] {
    const arr = [];
    let c = color;

    for (let n = 100; n > 0; n -= 10) {
      c = Color.fromHex(c.toHexString());
      arr.push(c.darker(n));
    }

    return arr;
  }
}
