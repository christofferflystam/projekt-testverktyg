class StudentList extends List {
	constructor(items){
		super(Student,items);
	}

	readStudentsFromDb(callback){
		this.db.readStudents((data)=>{
			this.push.apply(this,data);
			callback();
		});
	}

	static get sqlQueries(){
		return {
			readStudents: `
			SELECT * FROM users WHERE role = 'student';
			`, 

		}
	}

}