import { Component, OnInit, Inject } from '@angular/core';
import { Author } from './models/app.author';
import { AuthorService } from './services/author.service';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    styleUrls: ['./root.component.css'],
    providers: [AuthorService]
})

export class RootComponent implements OnInit {
    list: Array<Author>;
    selectedAuthor: Author;

    // private _aService:any
    // constructor(aService: any) { 
    //     this._aService = aService;
    // }

    // constructor(@Inject(AuthorService) private _aService: any) { }
    constructor(private _aService: AuthorService) { }

    ngOnInit() {
        this.list = this._aService.Authors;
    }

    selectAuthor(a: Author) {
        this.selectedAuthor = a;
    }

    isSelected(a: Author) {
        return this.selectedAuthor === a;
    }
}