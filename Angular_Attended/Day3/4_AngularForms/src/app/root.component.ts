import { Component } from '@angular/core';

@Component({
    selector: 'root',
    template: `
        <div class="container">
            <div class="row">
                <h1 class="text-info">Angular Forms</h1>
            </div>

            <reactive-form></reactive-form>
            <!-- <templated-form></templated-form> -->
            <!-- <model-based></model-based> -->
        </div>
    `
})

export class RootComponent {
    constructor() {
    }
}