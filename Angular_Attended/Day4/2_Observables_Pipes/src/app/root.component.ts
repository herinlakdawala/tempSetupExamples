import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Promise & Observable</h1>
            </div>

            <async-promise></async-promise>
            <hr/>
            <async-observable></async-observable>
        </div>
    `
})

export class RootComponent implements OnInit {
    observable: Observable<any>;
    subject: Subject<any>;

    constructor() {
    }

    ngOnInit(): void {
        // this.observable = Observable.create((ob: Observer<any>) => {
        //     setInterval(() => {
        //         ob.next(Math.random());
        //     }, 2000);
        // });

        // this.observable.subscribe((data) => {
        //     console.log("S1 - ", data);
        // });

        // this.observable.subscribe((data) => {
        //     console.log("S2 - ", data);
        // });

        // this.subject = new Subject<any>();

        // this.subject.subscribe((data) => {
        //     console.log("S1 - ", data);
        // });

        // this.subject.subscribe((data) => {
        //     console.log("S2 - ", data);
        // });

        // setInterval(() => {
        //     this.subject.next(Math.random());
        // }, 2000);

        // this.getPromise().then((data) => {
        //     console.log("Promise - ", data);
        // });
    }

    getPromise(): Promise<number> {
        return new Promise((resolve, reject) => {
            setInterval(() => resolve(Math.random()), 2000);
        });
    }
}