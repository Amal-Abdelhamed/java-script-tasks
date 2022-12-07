//factory method
function employee(nm, dept, sal) {
    return {
        empName: nm,
        empDept: dept,
        empSalary: sal,
        empInfo: function () {
            return this.empName + "works in dept " + this.empDept;
        }
    }
}
var emp1 = employee("ali", "SO", 5000)
console.log(emp1.empInfo());
console.log(emp1.empName);
console.log(emp1.empDept);
var emp2 = employee("nour", "SA", 3000)
//constructor method
function Employee(name, dept, sal) {
    this.empName = name;
    this.empSal = sal;
    this.empDept = dept;
}
var emp3 = Employee("amal", "FE", 10000); //it is not an object
var me = new Employee("esraa", "se", 7000);
console.log(emp3); //undefied
console.log(me); //object

//instant methods
console.log(me.hasOwnProperty("empName"));
console.log(me.toString());

//static function (class methods)
console.log(Object.keys(me));
console.log(Object.values(me));
delete me.empDept;
console.log(me.empDept);
for (var i in me) {
    console.log(i + ":" + me[i]);
}