
abstract class Shape {
  X: number;
  Y: number;
  color: string;

  protected creator_clone(source: Shape): Shape {
    this.X = source.X;
    this.Y = source.Y;
    this.color = source.color;
    return this;
  }

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  width: number;
  height: number;

  creator_clone(source: Rectangle): Shape {
    this.width = source.width
    this.height = source.height
    return this;
  }

  clone(): Shape {
    let rectangle = this;
    rectangle.creator_clone(this);
    return rectangle;
  }
}

class Circle extends Shape {
  radius: number;

  creator_clone(source: Circle): Shape {
      this.radius = source.radius
      return this;
  }

  clone(): Shape {
    let circle = this;
    circle.creator_clone(this);
    return  circle;
  }
}

let circle = new Circle()
circle.X = 10
circle.Y = 20
circle.color = 'black'
circle.radius = 111
const clonedCircle = circle.creator_clone(circle)

console.log(circle)
console.log(clonedCircle)

let rectangle = new Rectangle();
rectangle.X = 100
rectangle.Y = 101
rectangle.width = 200
rectangle.height = 201

console.log(rectangle);
console.log(rectangle.clone());
