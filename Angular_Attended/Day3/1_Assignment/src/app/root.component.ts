import { Component, NgZone } from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Directives</h1>
            </div>

            <list></list>
        </div>
    `
})

export class RootComponent {
    constructor() {
    }
}