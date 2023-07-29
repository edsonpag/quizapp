import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Lead } from "../interfaces/lead.interface";

@Injectable({ providedIn: 'root' })

export class LeadService {

    public lead: Lead = {
        id: "",
        formDataQuiz: {
            name: "",
            email: "",
            cellphoneNumber: "",
            terms: false
        },
        results: [],
        ageRange: "",
        questions: [],
        startedPlayingTheVideo: false,
        vslWatchTimeInSeconds: 0,
        checkout: false
    }
    
    constructor(private angularFirestore: AngularFirestore) {}

    add(lead: Lead) {
        lead.id = this.angularFirestore.createId();
        return this.angularFirestore.collection("/Leads").add(lead);
    }

    getAll() {
        return this.angularFirestore.collection('/Leads').snapshotChanges();
    }

    update(): void {
        this.angularFirestore.collection('/Leads').doc(this.lead.id).set(this.lead);
    }
}