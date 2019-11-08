import { Component } from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Pipes</h1>
            </div>

            <list [personList]=pList></list>

            <h2>{{name}}</h2>
            <h2>{{name | uppercase}}</h2>
            <h2>{{name | capitalize}}</h2>
            <h2>{{name}}</h2>

            <h2>{{today}}</h2>
            <h2>{{today | date}}</h2>
            <h2>{{today | date:'shortTime'}}</h2>
            <h2>{{today | date:'shortDate'}}</h2>
            <h2>{{today | date:'fullDate' | uppercase}}</h2>

            <h2>{{today | date:format}}</h2>
            <button class="btn btn-primary" (click)=handleClick()>Change</button>
        </div>
    `
})

export class RootComponent {
    name: string;
    today: Date;
    flag: boolean;
    pList: Array<string>;

    get format() {
        return this.flag ? 'fullDate' : 'shortDate';
    }

    constructor() {
        this.name = "herin lakdawala";
        this.today = new Date();
        this.pList = ["Herin", "Abhijeet", "Kedar", "Avinash", "Mohit", "Ashish", "Ankur", "Kumud"];
    }

    handleClick() {
        this.flag = !this.flag;
    }
}