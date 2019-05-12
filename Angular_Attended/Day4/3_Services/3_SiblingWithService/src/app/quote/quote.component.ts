import { Component, OnInit } from '@angular/core';
import { Author } from '../models/app.author';
import { AuthorService } from '../services/author.service';

@Component({
    selector: 'quote',
    styleUrls: ['./quote.component.css'],
    templateUrl: 'quote.component.html'
})

export class QuoteComponent implements OnInit {
    selectedAuthor: Author;

    constructor(private _aService: AuthorService) { }

    ngOnInit() { }

    getAuthor(){
        this.selectedAuthor = this._aService.SelectedAuthor;
    }
}