export interface RGB {
  red: number;
  green: number;
  blue: number;
}

export interface HSL {
  hue: number;
  saturation: number;
  lightness: number;
}

export interface HWB {
  hue: number;
  whiteness: number;
  blackness: number;
}

export interface CMYK {
  cyan: number;
  magenta: number;
  yellow: number;
  black: number;
}

export class Color implements RGB, HSL, HWB, CMYK {

  private static defaultColors = [
    { name: 'AliceBlue', hex: 'f0f8ff' },
    { name: 'AntiqueWhite', hex: 'faebd7' },
    { name: 'Aqua', hex: '00ffff' },
    { name: 'Aquamarine', hex: '7fffd4' },
    { name: 'Azure', hex: 'f0ffff' },
    { name: 'Beige', hex: 'f5f5dc' },
    { name: 'Bisque', hex: 'ffe4c4' },
    { name: 'Black', hex: '000000' },
    { name: 'BlanchedAlmond', hex: 'ffebcd' },
    { name: 'Blue', hex: '0000ff' },
    { name: 'BlueViolet', hex: '8a2be2' },
    { name: 'Brown', hex: 'a52a2a' },
    { name: 'BurlyWood', hex: 'deb887' },
    { name: 'CadetBlue', hex: '5f9ea0' },
    { name: 'Chartreuse', hex: '7fff00' },
    { name: 'Chocolate', hex: 'd2691e' },
    { name: 'Coral', hex: 'ff7f50' },
    { name: 'CornflowerBlue', hex: '6495ed' },
    { name: 'Cornsilk', hex: 'fff8dc' },
    { name: 'Crimson', hex: 'dc143c' },
    { name: 'Cyan', hex: '00ffff' },
    { name: 'DarkBlue', hex: '00008b' },
    { name: 'DarkCyan', hex: '008b8b' },
    { name: 'DarkGoldenRod', hex: 'b8860b' },
    { name: 'DarkGray', hex: 'a9a9a9' },
    { name: 'DarkGreen', hex: '006400' },
    { name: 'DarkKhaki', hex: 'bdb76b' },
    { name: 'DarkMagenta', hex: '8b008b' },
    { name: 'DarkOliveGreen', hex: '556b2f' },
    { name: 'DarkOrange', hex: 'ff8c00' },
    { name: 'DarkOrchid', hex: '9932cc' },
    { name: 'DarkRed', hex: '8b0000' },
    { name: 'DarkSalmon', hex: 'e9967a' },
    { name: 'DarkSeaGreen', hex: '8fbc8f' },
    { name: 'DarkSlateBlue', hex: '483d8b' },
    { name: 'DarkSlateGrey', hex: '2f4f4f' },
    { name: 'DarkTurquoise', hex: '00ced1' },
    { name: 'DarkViolet', hex: '9400d3' },
    { name: 'DeepPink', hex: 'ff1493' },
    { name: 'DeepSkyBlue', hex: '00bfff' },
    { name: 'DimGrey', hex: '696969' },
    { name: 'DodgerBlue', hex: '1e90ff' },
    { name: 'FireBrick', hex: 'b22222' },
    { name: 'FloralWhite', hex: 'fffaf0' },
    { name: 'ForestGreen', hex: '228b22' },
    { name: 'Fuchsia', hex: 'ff00ff' },
    { name: 'Gainsboro', hex: 'dcdcdc' },
    { name: 'GhostWhite', hex: 'f8f8ff' },
    { name: 'Gold', hex: 'ffd700' },
    { name: 'GoldenRod', hex: 'daa520' },
    { name: 'Gray', hex: '808080' },
    { name: 'Green', hex: '008000' },
    { name: 'GreenYellow', hex: 'adff2f' },
    { name: 'HoneyDew', hex: 'f0fff0' },
    { name: 'HotPink', hex: 'ff69b4' },
    { name: 'IndianRed', hex: 'cd5c5c' },
    { name: 'Indigo', hex: '4b0082' },
    { name: 'Ivory', hex: 'fffff0' },
    { name: 'Khaki', hex: 'f0e68c' },
    { name: 'Lavender', hex: 'e6e6fa' },
    { name: 'LavenderBlush', hex: 'fff0f5' },
    { name: 'LawnGreen', hex: '7cfc00' },
    { name: 'LemonChiffon', hex: 'fffacd' },
    { name: 'LightBlue', hex: 'add8e6' },
    { name: 'LightCoral', hex: 'f08080' },
    { name: 'LightCyan', hex: 'e0ffff' },
    { name: 'LightGoldenRodYellow', hex: 'fafad2' },
    { name: 'LightGrey', hex: 'd3d3d3' },
    { name: 'LightGreen', hex: '90ee90' },
    { name: 'LightPink', hex: 'ffb6c1' },
    { name: 'LightSalmon', hex: 'ffa07a' },
    { name: 'LightSeaGreen', hex: '20b2aa' },
    { name: 'LightSkyBlue', hex: '87cefa' },
    { name: 'LightSlateGrey', hex: '778899' },
    { name: 'LightSteelBlue', hex: 'b0c4de' },
    { name: 'LightYellow', hex: 'ffffe0' },
    { name: 'Lime', hex: '00ff00' },
    { name: 'LimeGreen', hex: '32cd32' },
    { name: 'Linen', hex: 'faf0e6' },
    { name: 'Magenta', hex: 'ff00ff' },
    { name: 'Maroon', hex: '800000' },
    { name: 'MediumAquaMarine', hex: '66cdaa' },
    { name: 'MediumBlue', hex: '0000cd' },
    { name: 'MediumOrchid', hex: 'ba55d3' },
    { name: 'MediumPurple', hex: '9370db' },
    { name: 'MediumSeaGreen', hex: '3cb371' },
    { name: 'MediumSlateBlue', hex: '7b68ee' },
    { name: 'MediumSpringGreen', hex: '00fa9a' },
    { name: 'MediumTurquoise', hex: '48d1cc' },
    { name: 'MediumVioletRed', hex: 'c71585' },
    { name: 'MidnightBlue', hex: '191970' },
    { name: 'MintCream', hex: 'f5fffa' },
    { name: 'MistyRose', hex: 'ffe4e1' },
    { name: 'Moccasin', hex: 'ffe4b5' },
    { name: 'NavajoWhite', hex: 'ffdead' },
    { name: 'Navy', hex: '000080' },
    { name: 'OldLace', hex: 'fdf5e6' },
    { name: 'Olive', hex: '808000' },
    { name: 'OliveDrab', hex: '6b8e23' },
    { name: 'Orange', hex: 'ffa500' },
    { name: 'OrangeRed', hex: 'ff4500' },
    { name: 'Orchid', hex: 'da70d6' },
    { name: 'PaleGoldenRod', hex: 'eee8aa' },
    { name: 'PaleGreen', hex: '98fb98' },
    { name: 'PaleTurquoise', hex: 'afeeee' },
    { name: 'PaleVioletRed', hex: 'db7093' },
    { name: 'PapayaWhip', hex: 'ffefd5' },
    { name: 'PeachPuff', hex: 'ffdab9' },
    { name: 'Peru', hex: 'cd853f' },
    { name: 'Pink', hex: 'ffc0cb' },
    { name: 'Plum', hex: 'dda0dd' },
    { name: 'PowderBlue', hex: 'b0e0e6' },
    { name: 'Purple', hex: '800080' },
    { name: 'RebeccaPurple', hex: '663399' },
    { name: 'Red', hex: 'ff0000' },
    { name: 'RosyBrown', hex: 'bc8f8f' },
    { name: 'RoyalBlue', hex: '4169e1' },
    { name: 'SaddleBrown', hex: '8b4513' },
    { name: 'Salmon', hex: 'fa8072' },
    { name: 'SandyBrown', hex: 'f4a460' },
    { name: 'SeaGreen', hex: '2e8b57' },
    { name: 'SeaShell', hex: 'fff5ee' },
    { name: 'Sienna', hex: 'a0522d' },
    { name: 'Silver', hex: 'c0c0c0' },
    { name: 'SkyBlue', hex: '87ceeb' },
    { name: 'SlateBlue', hex: '6a5acd' },
    { name: 'SlateGrey', hex: '708090' },
    { name: 'Snow', hex: 'fffafa' },
    { name: 'SpringGreen', hex: '00ff7f' },
    { name: 'SteelBlue', hex: '4682b4' },
    { name: 'Tan', hex: 'd2b48c' },
    { name: 'Teal', hex: '008080' },
    { name: 'Thistle', hex: 'd8bfd8' },
    { name: 'Tomato', hex: 'ff6347' },
    { name: 'Turquoise', hex: '40e0d0' },
    { name: 'Violet', hex: 'ee82ee' },
    { name: 'Wheat', hex: 'f5deb3' },
    { name: 'White', hex: 'ffffff' },
    { name: 'WhiteSmoke', hex: 'f5f5f5' },
    { name: 'Yellow', hex: 'ffff00' },
    { name: 'YellowGreen', hex: '9acd32' }
  ];

  public name = '';
  public hex = '';
  public red = 0;
  public green = 0;
  public blue = 0;

  public hue = 0;
  public saturation = 0;
  public lightness = 0;
  public whiteness = 0;
  public blackness = 0;

  public cyan = 0;
  public magenta = 0;
  public yellow = 0;
  public black = 0;

  constructor() {
    // this.attachValues(this.toColorObject(color));
  }

  static WebColors(): Array<Color> {
    return Color.defaultColors.map(c => Color.fromHex(c.hex));
  }

  static fromHex(hexValue: string): Color {

    if (hexValue.startsWith('#')) {
      hexValue = hexValue.substr(1);
    }

    const color = new Color();
    const fromDefault = Color.defaultColors.find(c => c.hex === hexValue);
    color.name = (fromDefault) ? fromDefault.name : '';
    color.hex = hexValue;
    color.red = parseInt(hexValue.substr(0, 2), 16);
    color.green = parseInt(hexValue.substr(2, 2), 16);
    color.blue = parseInt(hexValue.substr(4, 2), 16);

    const hsl = Color.rgbToHsl(color);
    color.hue = hsl.hue;
    color.saturation = hsl.saturation;
    color.lightness = hsl.lightness;

    const hwb = Color.rgbToHwb(color);
    color.whiteness = hwb.whiteness;
    color.blackness = hwb.blackness;

    const cmyk = Color.rgbToCmyk(color);
    color.cyan = cmyk.cyan;
    color.magenta = cmyk.magenta;
    color.yellow = cmyk.yellow;
    color.black = cmyk.black;

    color.roundDecimals();
    return color;
  }

  static fromRgb(rgb: RGB): Color {

    const color = new Color();
    color.red = rgb.red;
    color.green = rgb.green;
    color.blue = rgb.blue;

    const hsl = Color.rgbToHsl(color);
    color.hue = hsl.hue;
    color.saturation = hsl.saturation;
    color.lightness = hsl.lightness;

    const hwb = Color.rgbToHwb(color);
    color.whiteness = hwb.whiteness;
    color.blackness = hwb.blackness;

    const cmyk = Color.rgbToCmyk(color);
    color.cyan = cmyk.cyan;
    color.magenta = cmyk.magenta;
    color.yellow = cmyk.yellow;
    color.black = cmyk.black;

    color.hex = Color.rgbToHex(color);

    const fromDefault = Color.defaultColors.find(c => c.hex === color.hex);
    color.name = (fromDefault) ? fromDefault.name : '';

    color.roundDecimals();
    return color;
  }

  static fromRgbString(rgbString: string): Color {
    const arr = rgbString.split(',');
    return Color.fromRgb({
      red: Number.parseInt(arr[0], 10),
      green: Number.parseInt(arr[1], 10),
      blue: Number.parseInt(arr[2], 10)
    });
  }

  static fromCmyk(cyan: number, magenta: number, yellow: number, black: number): Color {

    const color = new Color();
    color.cyan = cyan;
    color.magenta = magenta;
    color.yellow = yellow;
    color.black = black;

    const rgb = Color.cmykToRgb(color);
    color.red = rgb.red;
    color.green = rgb.green;
    color.blue = rgb.blue;

    const hsl = Color.rgbToHsl(color);
    color.hue = hsl.hue;
    color.saturation = hsl.saturation;
    color.lightness = hsl.lightness;

    const hwb = Color.rgbToHwb(color);
    color.whiteness = hwb.whiteness;
    color.blackness = hwb.blackness;

    color.hex = Color.rgbToHex(color);

    const fromDefault = Color.defaultColors.find(c => c.hex === color.hex);
    color.name = (fromDefault) ? fromDefault.name : '';

    color.roundDecimals();
    return color;

  }

  static fromHsl(hue: number, saturation: number, lightness: number): Color {

    const color = new Color();
    color.hue = hue;
    color.saturation = saturation;
    color.lightness = lightness;

    const rgb = Color.hslToRgb(color);
    color.red = rgb.red;
    color.green = rgb.green;
    color.blue = rgb.blue;

    const hsl = Color.rgbToHsl(color);
    color.hue = hsl.hue;
    color.saturation = hsl.saturation;
    color.lightness = hsl.lightness;

    const hwb = Color.rgbToHwb(color);
    color.whiteness = hwb.whiteness;
    color.blackness = hwb.blackness;

    const cmyk = Color.rgbToCmyk(color);
    color.cyan = cmyk.cyan;
    color.magenta = cmyk.magenta;
    color.yellow = cmyk.yellow;
    color.black = cmyk.black;

    color.hex = Color.rgbToHex(color);

    const fromDefault = Color.defaultColors.find(c => c.hex === color.hex);
    color.name = (fromDefault) ? fromDefault.name : '';

    color.roundDecimals();
    return color;

  }

  static fromHwb(hue: number, whiteness: number, blackness: number): Color {

    const color = new Color();
    color.hue = hue;
    color.whiteness = whiteness;
    color.blackness = blackness;

    const rgb = Color.hwbToRgb(color);
    color.red = rgb.red;
    color.green = rgb.green;
    color.blue = rgb.blue;

    const hsl = Color.rgbToHsl(color);
    color.hue = hsl.hue;
    color.saturation = hsl.saturation;
    color.lightness = hsl.lightness;

    const cmyk = Color.rgbToCmyk(color);
    color.cyan = cmyk.cyan;
    color.magenta = cmyk.magenta;
    color.yellow = cmyk.yellow;
    color.black = cmyk.black;

    color.hex = Color.rgbToHex(color);

    const fromDefault = Color.defaultColors.find(c => c.hex === color.hex);
    color.name = (fromDefault) ? fromDefault.name : '';

    color.roundDecimals();
    return color;

  }

  static rgbToHsl(rgb: RGB): HSL {
    let min: number, max: number, i: number, l: number, s: number, maxcolor: number, h: number;
    const arr = [];
    arr[0] = rgb.red / 255;
    arr[1] = rgb.green / 255;
    arr[2] = rgb.blue / 255;

    min = arr[0];
    max = arr[0];
    maxcolor = 0;

    for (i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] <= min) {
        min = arr[i + 1];
      }

      if (arr[i + 1] >= max) {
        max = arr[i + 1];
        maxcolor = i + 1;
      }
    }

    if (maxcolor === 0) {
      h = (arr[1] - arr[2]) / (max - min);
    }

    if (maxcolor === 1) {
      h = 2 + (arr[2] - arr[0]) / (max - min);
    }

    if (maxcolor === 2) {
      h = 4 + (arr[0] - arr[1]) / (max - min);
    }

    if (isNaN(h)) {
      h = 0;
    }

    h = h * 60;

    if (h < 0) {
      h = h + 360;
    }
    l = (min + max) / 2;

    if (min === max) {
      s = 0;

    } else {

      if (l < 0.5) {
        s = (max - min) / (max + min);
      } else {
        s = (max - min) / (2 - max - min);
      }
    }

    return {
      hue: h,
      saturation: s,
      lightness: l
    };
  }

  static rgbToHwb(rgb: RGB): HWB {
    const red = rgb.red / 255;
    const green = rgb.green / 255;
    const blue = rgb.blue / 255;

    const max: number = Math.max(red, green, blue);
    const min: number = Math.min(red, green, blue);
    const chroma: number = max - min;

    let hue: number;

    if (chroma === 0) {
      hue = 0;

    } else if (red === max) {
      hue = (((green - blue) / chroma) % 6) * 360;

    } else if (green === max) {
      hue = ((((blue - red) / chroma) + 2) % 6) * 360;

    } else {
      hue = ((((red - green) / chroma) + 4) % 6) * 360;
    }

    return {
      hue: hue,
      whiteness: min,
      blackness: 1 - max
    };
  }

  static rgbToHex(rgb: RGB): string {
    let r = rgb.red.toString(16);
    let g = rgb.green.toString(16);
    let b = rgb.blue.toString(16);

    r = (r.length < 2) ? '0' + r : r;
    g = (g.length < 2) ? '0' + g : g;
    b = (b.length < 2) ? '0' + b : b;

    return r + g + b;
  }

  static rgbToCmyk(rgb: RGB): CMYK {
    let c: number, m: number, y: number, k: number;
    const red = rgb.red / 255;
    const green = rgb.green / 255;
    const blue = rgb.blue / 255;

    const max = Math.max(red, green, blue);
    k = 1 - max;

    if (k === 1) {
      c = 0;
      m = 0;
      y = 0;
    } else {
      c = (1 - red - k) / (1 - k);
      m = (1 - green - k) / (1 - k);
      y = (1 - blue - k) / (1 - k);
    }

    return {
      cyan: c,
      magenta: m,
      yellow: y,
      black: k
    };
  }

  static cmykToRgb(cmyk: CMYK): RGB {
    return {
      red: 255 - ((Math.min(1, cmyk.cyan * (1 - cmyk.black) + cmyk.black)) * 255),
      green: 255 - ((Math.min(1, cmyk.magenta * (1 - cmyk.black) + cmyk.black)) * 255),
      blue: 255 - ((Math.min(1, cmyk.yellow * (1 - cmyk.black) + cmyk.black)) * 255)
    };
  }

  static hslToRgb(hsl: HSL): RGB {

    if (hsl.hue === undefined) {
      return { red: 0, green: 0, blue: 0 };
    }

    const chroma = (1 - Math.abs((2 * hsl.lightness) - 1)) * hsl.saturation;
    let huePrime = hsl.hue / 60;
    const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

    huePrime = Math.floor(huePrime);
    let red;
    let green;
    let blue;

    if (huePrime === 0) {
      red = chroma;
      green = secondComponent;
      blue = 0;
    } else if (huePrime === 1) {
      red = secondComponent;
      green = chroma;
      blue = 0;
    } else if (huePrime === 2) {
      red = 0;
      green = chroma;
      blue = secondComponent;
    } else if (huePrime === 3) {
      red = 0;
      green = secondComponent;
      blue = chroma;
    } else if (huePrime === 4) {
      red = secondComponent;
      green = 0;
      blue = chroma;
    } else if (huePrime === 5) {
      red = chroma;
      green = 0;
      blue = secondComponent;
    }

    const lightnessAdjustment = hsl.lightness - (chroma / 2);
    red += lightnessAdjustment;
    green += lightnessAdjustment;
    blue += lightnessAdjustment;

    return { red: Math.round(red * 255), green: Math.round(green * 255), blue: Math.round(blue * 255) };
  }

  static hwbToRgb(hwb: HWB): RGB {

    const rgb = this.hslToRgb({ hue: hwb.hue, saturation: 1, lightness: 0.50 });

    const rgbArr = [];
    rgbArr[0] = rgb.red / 255;
    rgbArr[1] = rgb.green / 255;
    rgbArr[2] = rgb.blue / 255;

    const tot = hwb.whiteness + hwb.blackness;
    let white: number, black: number;
    if (tot > 1) {
      white = Number((white / tot).toFixed(2));
      black = Number((black / tot).toFixed(2));
    }

    for (let i = 0; i < 3; i++) {
      rgbArr[i] *= (1 - (white) - (black));
      rgbArr[i] += (white);
      rgbArr[i] = Number(rgbArr[i] * 255);
    }

    return {
      red: rgbArr[0],
      green: rgbArr[1],
      blue: rgbArr[2]
    };
  }

  static hueToRgbValue(t1: number, t2: number, hue: number): number {
    if (hue < 0) { hue += 6; }
    if (hue >= 6) { hue -= 6; }

    if (hue < 1) {
      return (t2 - t1) * hue + t1;

    } else if (hue < 3) {
      return t2;

    } else if (hue < 4) {
      return (t2 - t1) * (4 - hue) + t1;

    } else {
      return t1;
    }
  }

  isDark(breakpoint: number = 50): boolean {
    return this.luminance < breakpoint;
  }

  saturate(factor: number): Color {
    const x = (factor / 100 || 0.1);

    this.saturation += x;

    if (this.saturation > 1) {
      this.saturation = 1;
    }

    const rgb = Color.hslToRgb(this);
    return Color.fromRgb(rgb);
  }

  desaturate(factor: number): Color {
    const x = (factor / 100 || 0.1);

    this.saturation -= x;

    if (this.saturation < 0) {
      this.saturation = 0;
    }

    const rgb = Color.hslToRgb(this);
    return Color.fromRgb(rgb);
  }

  lighter(factor: number): Color {

    const color = Color.fromHex(this.hex);
    const x = (factor / 100 || 0.1);

    color.lightness += x;

    if (color.lightness > 1) {
      color.lightness = 1;
    }

    return Color.fromHsl(color.hue, color.saturation, color.lightness);
  }

  darker(factor: number): Color {
    const color = Color.fromHex(this.hex);
    const x = (factor / 100 || 0.1);

    color.lightness -= x;
    color.lightness = (color.lightness < 0) ? 0 : color.lightness;

    return Color.fromHsl(color.hue, color.saturation, color.lightness);
  }

  lightenDarken(percent: number): Color {

    const num = parseInt(this.hex, 16);
    const amt = Math.round(2.55 * percent);
    // tslint:disable-next-line: no-bitwise
    const R = (num >> 16) + amt;
    // tslint:disable-next-line: no-bitwise
    const B = (num >> 8 & 0x00FF) + amt;
    // tslint:disable-next-line: no-bitwise
    const G = (num & 0x0000FF) + amt;

    // tslint:disable-next-line: max-line-length
    const hexString = (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
    console.log('Hex: ', hexString);

    return Color.fromHex(hexString);


    // const num = parseInt(this.hex, 16);

    // // tslint:disable-next-line: no-bitwise
    // let r = (num >> 16) + amt;
    // if (r > 255) { r = 255; } else if (r < 0) { r = 0; }

    // // tslint:disable-next-line: no-bitwise
    // let b = ((num >> 8) & 0x00FF) + amt;
    // if (b > 255) { b = 255; } else if (b < 0) { b = 0; }

    // // tslint:disable-next-line: no-bitwise
    // let g = (num & 0x0000FF) + amt;
    // if (g > 255) { g = 255; } else if (g < 0) { g = 0; }

    // // tslint:disable-next-line: no-bitwise
    // const hexString = (g | (b << 8) | (r << 16)).toString(16);
    // // const hexString = Color.rgbToHex({ red: r, green: g, blue: b });
    // console.log('hexColor: ', { r: r, g: g, b: b }, this.hex, '>', hexString);
    // return Color.fromHex(hexString);
  }

  private roundDecimals() {
    this.red = Number(this.red.toFixed(0));
    this.green = Number(this.green.toFixed(0));
    this.blue = Number(this.blue.toFixed(0));
    this.hue = Number(this.hue.toFixed(0));
    this.saturation = Number(this.saturation.toFixed(2));
    this.lightness = Number(this.lightness.toFixed(2));
    this.whiteness = Number(this.whiteness.toFixed(2));
    this.blackness = Number(this.blackness.toFixed(2));
    this.cyan = Number(this.cyan.toFixed(2));
    this.magenta = Number(this.magenta.toFixed(2));
    this.yellow = Number(this.yellow.toFixed(2));
    this.black = Number(this.black.toFixed(2));
  }

  toHexString() {
    return `#${this.hex}`;
  }

  toRgbString() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }

  toHslString() {
    return `hsl(${this.hue}, ${Math.round(this.saturation * 100)}%, ${Math.round(this.lightness * 100)}%)`;
  }

  toHwbString() {
    return `hwb(${this.hue}, ${Math.round(this.whiteness * 100)}%, ${Math.round(this.blackness * 100)}%)`;
  }

  toCmykString() {
    // tslint:disable-next-line: max-line-length
    return `cmyk(${Math.round(this.cyan * 100)}%, ${Math.round(this.magenta * 100)}%, ${Math.round(this.yellow * 100)}%, ${Math.round(this.black * 100)}%)`;
  }

  toHwbStringDecimal() {
    return `hwb(${this.hue}, ${this.whiteness * 100}, ${this.blackness})`;
  }

  toHslStringDecimal() {
    return `hsl(${this.hue}, ${this.saturation}, ${this.lightness})`;
  }

  toCmykStringDecimal() {
    return `cmyk(${this.cyan}, ${this.magenta}, ${this.yellow}, ${this.black})`;
  }

  get rgb(): RGB {
    return {
      red: this.red,
      green: this.green,
      blue: this.blue
    };
  }

  get hsl(): HSL {
    return {
      hue: this.hue,
      saturation: this.saturation,
      lightness: this.lightness
    };
  }

  get hwb(): HWB {
    return {
      hue: this.hue,
      whiteness: this.whiteness,
      blackness: this.blackness
    };
  }

  get cmyk(): CMYK {
    return {
      cyan: this.cyan,
      magenta: this.magenta,
      yellow: this.yellow,
      black: this.black
    };
  }

  get luminance(): number {
    const lum = Math.abs(((this.red * 299 + this.green * 587 + this.blue * 114) / 1000) / 255 * 100);
    return Number.parseInt(lum.toFixed(0), 10);
  }
}
