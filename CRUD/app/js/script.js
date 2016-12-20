'use strict';

class Person{
	constructor(name, age) {
    	this.name = name;
		this.age = age;
		Person.count += 1;
	}
}

class TeamLeader extends Person{	
	constructor(name, age, salary, skill, email='') {
		super(name, age);
		this.salary = salary;
		this.skill = skill;
		this.email = email;
	}
}

class Programmer extends Person{
	constructor(name, age, salary, skill) {
		super(name, age);
		this.salary = salary;
		this.skill = skill;
	}

	sayHi() {
		console.log(this.name);
		console.log(this.age);
		console.log(this.salary);
		console.log(this.skill);
	}
}

Person.count = 0; //статическая переменная



let pr = new Programmer("Дима", 18, 500, "android-developer");
let tl = new TeamLeader("Олег", 25, 700, "java-developer", "oleg@mail.ru")
pr.sayHi();
console.log(Person.count);
//console.log(Programmer.prototype.__proto__ == Person.prototype);




let programmers = [];
let programmerId;

$(document).ready(function () {
	
	$("#insert-programmer-click").on('submit', function(event){
		event.preventDefault();
		let name = $("#txtName").val();
		let age = $("#txtAge").val();
		let salary = $("#txtSalary").val();
		let skill = $("#txtSkill").val();
		let newProgrammer;
		
		console.log(name);
		console.log(age);
		console.log(salary);
		console.log(skill);
		
		newProgrammer = new Programmer(name, age, salary, skill);
		programmers.push(newProgrammer);
		console.log(programmers);
		programmerId++;
	});
});