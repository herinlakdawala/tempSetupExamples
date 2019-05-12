import { Component } from "@angular/core";

@Component({
    selector: 'c-one',
    styleUrls: ['./cone.component.css'],
    template: `
        <div class="row">    
            <h1 class="text-info">Hello from Component One!</h1>
            <h1 class="card">From Component One!</h1>
        </div>
    `
})
export class COneComponent { }