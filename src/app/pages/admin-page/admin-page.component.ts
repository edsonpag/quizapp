import { ViewEncapsulation } from "@angular/core";
import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Lead } from "src/app/interfaces/lead.interface";
import * as WebDataRocks from "webdatarocks";

@Component({
    selector: 'admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AdminPageComponent implements OnInit {

    pivot!: WebDataRocks.Pivot

    constructor(private angularFirestore: AngularFirestore) {}

    async ngOnInit(): Promise<void> {
        await this.createWebDataRocksLeads()
    }

    async createWebDataRocksLeads(): Promise<void> {
        let leads: Lead[] = []
        const docs = await this.angularFirestore.collection("/Leads").get()
        await docs.forEach(docs => {
            if (!docs.empty) {
                docs.forEach(lead => {
                    if (lead.exists) {
                        leads.push(lead.data() as Lead)
                    }
                })
            }
        })
        this.pivot = new WebDataRocks({
            container: "#webdatarocks-leads",
            toolbar: true,
            global: {
                options: {
                    grid: {
                        type: 'flat',
                        showTotals: 'off',
                        showGrandTotals: 'off'
                    }
                }
            },
            report: {
                dataSource: {
                    data: leads
                },
                localization: "https://cdn.webdatarocks.com/loc/pr.json"
            }
        })
    }
}