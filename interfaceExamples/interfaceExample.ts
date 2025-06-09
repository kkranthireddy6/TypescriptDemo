interface Shape {
    shapename: string;
}

interface Area  {
    width :number;
    height?: number;
    getArea(): number;
}


class Maths implements Shape, Area {
    constructor(public shapename: string, public width: number, public height?: number){}

    getArea(): number {
        if(this.height !== undefined){
            return this.width * this.height
        }else{
            throw new Error('throw new Exception')
        }
        
    }
}

class Maths1 extends Maths {
    public override getArea(): number {
        return this.width * this.width
    }
}


const a = new Maths("rectangle", 10,20)
console.log(a.shapename, a.getArea())

const a1 = new Maths1("square", 10)
console.log(a1.shapename, a1.getArea())
