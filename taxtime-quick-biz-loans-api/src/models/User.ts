export class User {

    firstName: string;
    lastName: string;
    userId: string;

    constructor(firstName: string, lastName: string, id: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userId = id;
    }
}