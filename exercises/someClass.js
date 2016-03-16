class someClass {
    constructor() {
        this._prop = 5;
    }
    
    get prop() {
        return this._prop
    }
    
    set prop(value) {
        this._prop = value
    }
    
    multiplyByTwo() {
        return this.prop * 2;
    }
    
    static weCanHaveStaticMethodsToo() {
        return this._prop //Should be undefined
    }
    
    static otherStatic() {
        return -1
    }
}
let obj = new someClass();

// Note that the below 'prop' translates to the private '_prop' above
// The getting and setting of the '_prop' property is encapsulated by
// the 'get' and 'set', which do the actual interactions with '_prop'
console.log(obj.prop);
obj.prop = 10;
console.log(obj.prop);
console.log(obj.multiplyByTwo());

// shoule be undefined because the static method is attempting to return a
// property that is set in the constructor
console.log(someClass.weCanHaveStaticMethodsToo());

// But this static method does work
console.log(someClass.otherStatic());

// console.log(obj.otherStatic()) //Syntax Error!

