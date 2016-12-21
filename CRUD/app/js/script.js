'use strict';

class Person{
	constructor(name, age) {
    	this.name = name;
		this.age = age;
		Person.id += 1;
	}
}

class TeamLeader extends Person{	
	constructor(name, age, salary, email='', id) {
		super(name, age);
		this.salary = salary;
		this.email = email;
		this.id = id;
	}
}

class Programmer extends Person{
	constructor(name, age, salary, skill, id) {
		super(name, age);
		this.salary = salary;
		this.skill = skill;
		this.id = id;
	}

	sayHi() {
		console.log(this.id);
		console.log(this.name);
		console.log(this.age);
		console.log(this.salary);
		console.log(this.skill);
	}
}

Person.id = 0; //статическая переменная



//let pr = new Programmer("Дима", 18, 500, "android-developer", Person.id);
//let pr2 = new Programmer("Рома", 18, 400, "android-developer", Person.id);
//let tl = new TeamLeader("Олег", 25, 700, "oleg@mail.ru", Person.id)
//pr.sayHi();
//pr2.sayHi();
//console.log(Person.id);




let programmers = [];
let teamLeaders = [];

let compileProgrammer = () => {
	let data = programmers;
		
	let source = $("#person-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let content = $("#programmer-list")[0];
    content.innerHTML = result;
	
}

let addProgrammer = () => {
	event.preventDefault();
	let name = $("#txtName").val();
	let age = $("#txtAge").val();
	let salary = $("#txtSalary").val();
	let skill = $("#txtSkill").val();
	let tmpProgrammer;
		
	$('#add-programmer-click')[0].reset();
	
	tmpProgrammer = new Programmer(name, age, salary, skill, Person.id);
	programmers.push(tmpProgrammer);
	console.log(programmers);
	
	compileProgrammer();
}

let deleteProgrammer = (id) => {
	for(let i = 0; i < programmers.length; i++) {
        if(programmers[i].id == id) {
            programmers.splice(i, 1);
            break;
        }
    }
	
	compileProgrammer();
}

let updateProgrammer = (id) => {
	for(let i = 0; i < programmers.length; i++) {
        if(programmers[i].id == id) {
			$("#txtName").val(programmers[i].name);
			$("#txtAge").val(programmers[i].age);
			$("#txtSalary").val(programmers[i].salary);
			$("#txtSkill").val(programmers[i].skill);
            break;
        }
    }
}

$(document).on("click", ".addProgrammer", function(){
    addProgrammer();
});

$(document).on("click", ".deleteProgrammer", function(){
    deleteProgrammer(this.id);
	console.log(this.id);
});

$(document).on("click", ".updateProgrammer", function(){
	updateProgrammer(this.id);
	deleteProgrammer(this.id);
});






let compileTeamLeader = () => {
	let data = teamLeaders;
		
	let source = $("#teamLeader-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let content = $("#teamLeader-list")[0];
    content.innerHTML = result;	
}

let addTeamLeader = () => {
	event.preventDefault();
	let name = $("#txtTlName").val();
	let age = $("#txtTlAge").val();
	let salary = $("#txtTlSalary").val();
	let email = $("#txtTlEmail").val();
	let tmpTeamLeader;
		
	$('#add-teamLeader-click')[0].reset();
	
	tmpTeamLeader = new TeamLeader(name, age, salary, email, Person.id);
	teamLeaders.push(tmpTeamLeader);
	console.log(teamLeaders);
	
	compileTeamLeader();
}

let deleteTeamLeader = (id) => {
	for(let i = 0; i < teamLeaders.length; i++) {
        if(teamLeaders[i].id == id) {
            teamLeaders.splice(i, 1);
            break;
        }
    }
	
	compileTeamLeader();
}

let updateTeamLeader = (id) => {
	for(let i = 0; i < teamLeaders.length; i++) {
        if(teamLeaders[i].id == id) {
			$("#txtTlName").val(teamLeaders[i].name);
			$("#txtTlAge").val(teamLeaders[i].age);
			$("#txtTlSalary").val(teamLeaders[i].salary);
			$("#txtTlEmail").val(teamLeaders[i].email);
            break;
        }
    }
}

$(document).on("click", ".addTeamLeader", function(){
    addTeamLeader();
});

$(document).on("click", ".deleteTeamLeader", function(){
    deleteTeamLeader(this.id);
	console.log(this.id);
});

$(document).on("click", ".updateTeamLeader", function(){
	updateTeamLeader(this.id);
	deleteTeamLeader(this.id);
});









