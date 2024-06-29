import inquirer from "inquirer";

class Student {
    name: string;
    age: number;
    grade: number;

    constructor(name: string, age: number, grade: number) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}

class StudentManagementSystem {
    students: Student[];

    constructor() {
        this.students = [];
    }

    addStudent(name: string, age: number, grade: number): void {
        const student = new Student(name, age, grade);
        this.students.push(student);
    }

    displayStudents(): void {
        if (this.students.length === 0) {
            console.log("No students in the system yet.");
        } else {
            console.log("Student Information:");
            this.students.forEach(student => {
                console.log(`Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
            });
        }
    }
}

async function main(): Promise<void> {
    const sms = new StudentManagementSystem();

    while (true) {
        const { choice } = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Student Management System',
                choices: [
                    'Add Student',
                    'Display Students',
                    'Exit'
                ]
            }
        ]);

        if (choice === 'Add Student') {
            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter student name:'
                },
                {
                    type: 'number',
                    name: 'age',
                    message: 'Enter student age:'
                },
                {
                    type: 'number',
                    name: 'grade',
                    message: 'Enter student grade:'
                }
            ]);
            sms.addStudent(answers.name, answers.age, answers.grade);
            console.log("Student added successfully!");
        } else if (choice === 'Display Students') {
            sms.displayStudents();
        } else if (choice === 'Exit') {
            console.log("Exiting Student Management System. Goodbye!");
            break;
        }
    }
}

main().catch(console.error);
