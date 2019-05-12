import { Component } from '@angular/core';
import { person } from './models/person.model';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Angular Forms</h1>
            </div>

            <d-form [data]=person></d-form>
        </div>
    `
})

export class RootComponent {
    person: any;

    constructor() {
        this.person = person;
    }
}