import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  contacts: ContactModel[] =[];

  updateContacts(): ContactModel[] {
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
   return this.contacts;
  }

  addContact(contact: ContactModel){
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }

  removeContact(id: string){
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
