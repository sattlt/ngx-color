import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/color-lib/color';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html'
})
export class NamesComponent implements OnInit {

  public colorNames: Color[];

  constructor() { }

  ngOnInit() {
    this.colorNames = Color.WebColors();
  }

  sortBy(col: string) {
    switch (col) {
      case 'color':
        this.colorNames = Color.WebColors().sort((c1, c2) => c1.name.localeCompare(c2.name));
        break;

      case 'hex':
        this.colorNames = Color.WebColors().sort((c1, c2) => c1.toHexString().localeCompare(c2.toHexString()));
        break;

      case 'rgb':
        this.colorNames = Color.WebColors().sort((c1, c2) => c1.toRgbString().localeCompare(c2.toRgbString()));
        break;

      case 'hsl':
        this.colorNames = Color.WebColors().sort((c1, c2) => c1.toHslString().localeCompare(c2.toHslString()));
        break;

      case 'hwb':
        this.colorNames = Color.WebColors().sort((c1, c2) => c1.toHwbString().localeCompare(c2.toHwbString()));
        break;

      case 'cmyk':
        this.colorNames = Color.WebColors().sort((c1, c2) => c1.toCmykString().localeCompare(c2.toCmykString()));
        break;
    }
  }
}
