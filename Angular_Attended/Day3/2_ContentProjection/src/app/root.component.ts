import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <div class="container text-center">
            <div class="row">
                <h1 class="text-info">Content Projection</h1>
            </div>

            <!-- <c-one>
                <button class="btn btn-info btn-block" (click)="handleClick()">Outside Component 1</button>
                <button class="btn btn-warning btn-block" (click)="handleClick()">Outside Component 2</button>
            </c-one> -->

            <form>
                <icon-input>
                    <input type="email" placeholder="Enter Email"/>
                </icon-input>
            </form>
        </div>
    `
})

export class RootComponent {
    constructor() {
    }

    handleClick(){
        alert("From Root");
    }
}