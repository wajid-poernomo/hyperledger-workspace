export class Accountant {

    taxAccountantId: string;
    firstName: string;
    lastName: string;

    constructor(taxAccountantId: string, firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.taxAccountantId = taxAccountantId;
    }
}