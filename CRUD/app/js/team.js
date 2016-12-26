class Team{
	constructor(name, task, tmLeader, members, id) {
    	this.name = name;
		this.task = task;
		this.tmLeader = tmLeader;
		this.members = members;
		this.id = id;
		Team.id += 1;
	}
}

Team.id = 0;