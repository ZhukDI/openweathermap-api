class TeamLeader extends Person{	
	constructor(name, age, salary, email='', id) {
		super(name, age);
		this.salary = salary;
		this.email = email;
		this.id = id;
	}
}