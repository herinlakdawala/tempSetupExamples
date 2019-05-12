import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Directives</h1>
            </div>

            <list></list>

            <!-- <h3 change-content>Hello</h3> -->

            <!--  <h2 [style.display]="name? 'block': 'none'">Hello, {{name}}</h2>
            <h2 *ngIf="name; else elseBlock">Hello, {{name}}</h2>

            <ng-template #elseBlock>
                <h2>Nothing to Display</h2>
            </ng-template>-->

            <!-- <ng-template [ngIf]="name">
                <h2>Hello, {{name}}</h2>
            </ng-template> -->

        </div>
    `
})

export class RootComponent {
    name: string;
    constructor() {
        // this.name = "Synechron";
    }
}