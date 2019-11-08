import { Component, NgZone, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Communication</h1>
            </div>

            <!-- <list [personList]=pList></list> -->

            <div class="row">
                <h3 class="alert alert-danger" *ngIf="message">{{message}}</h3>
                <counter #c1 (onMax)="maxedOut($event)"></counter>    
                <br/>
                <div class="col-md-4">
                    <button class="btn btn-warning btn-block" (click)="c1.reset()">Parent Reset</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-warning btn-block" (click)="p_reset(c1)">Parent Reset</button>
                </div>
            </div>

            <!-- <counter #c1 [interval]=10></counter>  -->   
            <!-- <div class="row">
                <counter #c1></counter>    
                <counter #c2></counter>    
                <br/>
                <br/>
                <div class="col-md-4">
                    <button class="btn btn-warning btn-block" (click)="c1.reset()">Parent Reset</button>
                </div>
                <div class="col-md-4">
                    <button class="btn btn-warning btn-block" (click)="p_reset(c1)">Parent Reset</button>
                </div>
            </div> -->  

            <!-- <div class="row">
                <div class="col-md-4">
                    <input type="number" class="form-control" [(ngModel)]=data>
                </div>
                <br/>
                <br/>
                <counter [interval]=data></counter>
            </div> -->
        </div>
    `
})

export class RootComponent implements AfterViewInit {
    data: number;
    pList: Array<string>;
    message: string;

    // @ViewChild(CounterComponent)
    // counter: CounterComponent;

    // @ViewChild("c2")
    // counter: CounterComponent;

    @ViewChildren(CounterComponent)
    counters: QueryList<CounterComponent>;

    constructor() {
        this.data = 10;
        this.pList = ["Herin", "Abhijeet", "Abhishek", "Kedar", "Sumeet"];
        this.message = "";
    }

    ngAfterViewInit(): void {
        // this.counter.interval = 100;
        // console.log(this.counters);
        for (const counter of this.counters.toArray()) {
            counter.interval = 100;
        }
    }

    p_reset(cnt: CounterComponent) {
        cnt.reset();
    }

    maxedOut(flag: boolean) {
        if (flag)
            this.message = "Max click Reacher, please reset...";
        else
            this.message = "";
    }
}