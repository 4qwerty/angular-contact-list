export class ContactModel {
    constructor(
        public name: string,
        public phone: string,
        public email: string,
        public id?: string 
    ) { 
        this.id = '_' + Math.random().toString(36).substring(2,9);
    }
}