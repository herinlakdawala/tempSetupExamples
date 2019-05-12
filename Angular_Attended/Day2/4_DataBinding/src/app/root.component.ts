import { Component, NgZone } from '@angular/core';

// const image1 = require('../assets/image1.jpg');
// console.log(image1);

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Data Binding</h1>
            </div>

            <div [hidden]=!flag>
                <!-- <assign-one></assign-one> -->
                <assign-two></assign-two>
            </div>

            <div>
                <h2 class="text-success">Attribute Binding</h2>
                <img [src]=image1 height="300" width="300"/>
                <img [src]=image1 [height]=h [width]=w/>
                <!-- <table style="border:1px solid black" height="300" width="300"> -->
                <table style="border:1px solid black" [attr.height]=h [attr.width]=w>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                    </tr>
              </table> 
            </div>

            <div [hidden]=!flag>
                <h2 class="text-success">Two Way Binding</h2>
                <h3>Message: {{message}}</h3>
                <input type="text" bindon-ngModel=message/>
                <input type="text" [(ngModel)]=message/>
                <input type="text" [(ngModel)]=message [ngModelOptions]="{updateOn: 'blur'}"/>
                <br/>
                <button class="btn btn-info" (click)=doChange()>Click Me</button>
                <hr/>
                <input type="text" [(ngModel)]=city/>
                <h4>Your are from: {{city}}</h4>
                <hr/>
                <input type="text" [(ngModel)]=name (change)=doUpdate(name) (blur)=doBlur()/>
                <input type="text" [(ngModel)]=name (input)=doUpdate(name)/>
            </div>

            <div [hidden]=!flag>
                <h2 class="text-success">Event Binding</h2>
                <h3>Message: {{message}}</h3>
                <button class="btn btn-info" on-click=doChange()>Click Me</button>
                <button class="btn btn-info" (click)=doChange()>Click Me</button>
                <button class="btn btn-success" id="b1">Click Me - JS</button>
            </div>

            <div [hidden]=!flag>
                <h2 class="text-success">Property Binding</h2>
                <h3>Message: {{message}}</h3>
                <input type="text" value={{message}}/>
                <h3 innerHTML={{message}} hidden={{flag}}>Message: </h3>
                <h3 bind-innerHTML=message bind-hidden=flag>Message: </h3>
                <h3 [innerHTML]=message [hidden]=flag>Message: </h3>
            </div>
        </div>
    `
})

export class RootComponent {
    message: string;
    flag: boolean;
    h = 300;
    w = 300;
    image1: any;

    constructor(private zone: NgZone) {
        this.message = "Hello";
        this.flag = false;
        this.image1 = require('../assets/image1.jpg');
    }

    doChange() {
        // alert("Do Change Called...");
        this.message = new Date().toTimeString();
    }

    ngAfterViewInit() {
        // document.getElementById("b1").addEventListener("click", () => {
        //     this.message = new Date().toTimeString();
        // });

        this.zone.runOutsideAngular(() => {
            document.getElementById("b1").addEventListener("click", () => {
                this.message = new Date().toTimeString();
                console.log(this.message);
            });
        })
    }

    doUpdate(n: string) {
        this.message = "Hello, " + n;
        console.log("Change...");
    }

    doBlur() {
        console.log("Blur...");
    }
}