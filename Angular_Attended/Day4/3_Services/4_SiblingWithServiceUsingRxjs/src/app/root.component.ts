import { Component, OnInit } from '@angular/core';
import { AuthorService } from './services/author.service';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    providers: [AuthorService]
})

export class RootComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}