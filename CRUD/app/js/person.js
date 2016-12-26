class Person{
	constructor(name, age) {
    	this.name = name;
		this.age = age;
		Person.id += 1;
	}
}

Person.id = 0;