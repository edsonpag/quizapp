import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Lead } from "../interfaces/lead.interface";

@Injectable({ providedIn: 'root' })

export class LeadService {

    public lead: Lead = {
        id: "",
        name: "",
        email: "",
        cellphoneNumber: "",
        terms: false,
        personality: "",
        age: 0,
        creationDate: null
    }
    
    constructor(private angularFirestore: AngularFirestore) {}

    add(lead: Lead) {
        lead.id = this.angularFirestore.createId()
        lead.creationDate = new Date()
        return this.angularFirestore.collection("/Leads").add(lead)
    }

    getAll() {
        return this.angularFirestore.collection('/Leads').snapshotChanges();
    }
}