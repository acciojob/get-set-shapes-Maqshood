class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends animal {
  constructor(side) {
    super(side, side); // Call parent Rectangle constructor with side as both width and height
  }

  getPerimeter() {
    return this._width * 4;
  }
}
