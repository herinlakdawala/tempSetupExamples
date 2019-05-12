// Http Calls from the Component
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Post } from './models/post.model';
import { DataService } from './services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'root',
    templateUrl: 'root.component.html',
    providers: [DataService]
})

export class RootComponent implements OnInit, OnDestroy {
    posts: Array<Post>;
    message: string;
    gp_Subscription: Subscription;

    constructor(private _dService: DataService) {
        this.message = "Getting Data from the server, please wait......";
    }

    ngOnInit() {
        this.gp_Subscription = this._dService.getAllPosts().subscribe((resData) => {
            this.posts = resData;
            this.message = "";
        }, (err: string) => {
            this.message = err;
        });
    }

    ngOnDestroy(): void {
        if (this.gp_Subscription) {
            this.gp_Subscription.unsubscribe();
        }
    }
}

// // Http Calls from the Component
// import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Post } from './models/post.model';

// @Component({
//     selector: 'root',
//     templateUrl: 'root.component.html'
// })

// export class RootComponent implements OnInit {
//     posts: Array<Post>;
//     message: string;
//     url: string;

//     constructor(private httpClient: HttpClient) {
//         this.message = "Getting Data from the server, please wait......";
//         this.url = "https://jsonplaceholder.typicode.com/posts";
//     }

//     ngOnInit() {
//         this.httpClient.get<Array<Post>>(this.url).subscribe((resData) => {
//             this.posts = resData;
//             this.message = "";
//         }, (err: HttpErrorResponse) => {
//             this.message = err.message;
//         });
//     }
// }