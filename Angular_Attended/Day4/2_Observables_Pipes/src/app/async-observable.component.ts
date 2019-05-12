import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'async-observable',
    template: `
        <div class="card card-block">
            <h2 class="card-title">With Observable</h2>
            <h3>Result: {{observableData}}</h3>
            <h3>Observable Result: {{observable | async}}</h3>
        </div>
    `
})

export class AsyncObservableComponent implements OnInit, OnDestroy {
    observableData: number;
    subscription: Subscription;
    observable: Observable<number>;

    constructor() { }

    ngOnInit() {
        this.subscription = this.getObservable().subscribe(v => this.observableData = v);
        this.observable = this.getObservable();
    }

    getObservable() {
        return interval(2000).pipe(map(v => Math.random()));
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}