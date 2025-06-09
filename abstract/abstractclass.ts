abstract class Polygon {
  public abstract getArea() : number

  public toString() : string{
      return `Example for abstract class`
  }
}

class Rectangle extends Polygon {
  public constructor(protected width: number, protected height: number){
      super()
  }

  public getArea(): number {
      return this.width * this.height
  }
}

const r = new Rectangle(10, 20)
console.log(r.getArea())
console.log(r.toString())
