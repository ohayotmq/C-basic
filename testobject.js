emp = ((id, name, salary) => {
    this.id = id;
    this.name = name;
    this.salary = salary;
});
var e = new emp(1, "Kuan", "100$");
console.log(e);