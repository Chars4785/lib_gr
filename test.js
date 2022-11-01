const a = [1,23,3]

// console.log(
//     a.flatMap( (current,index,array) => {
//         console.log(current,index,array)
//     })
// )

class Sample {
    constructor() {
      this.list = [1, 2, 3];
    }
    mapList() {
      this.list.map(function(x) {
        console.log(this.list); 
      },this);
    }
  }
  const obj = new Sample();
const b = obj.mapList();    // `this` is undefined

class Sample {
    constructor() {
      this.list = [1, 2, 3];
    }
    mapList() {
      this.list.map(function(x) {
        console.log(this.list); 
      });
    }
  }
  const obj = new Sample();
const b = obj.mapList();    // `this` is undefined