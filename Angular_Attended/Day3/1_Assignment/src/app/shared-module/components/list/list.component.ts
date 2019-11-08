import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    personList: Array<string>;
    selectedPerson: string;

    constructor() {
        this.personList = ["Herin", "Abhijeet", "Abhishek", "Kedar", "Sumeet"];
    }

    ngOnInit() { }

    select(p: string, e: Event) {
        this.selectedPerson = p;
        e.preventDefault();
    }
}