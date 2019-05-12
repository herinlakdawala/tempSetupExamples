// 3. Validators
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'reactive-form',
    templateUrl: 'reactive.component.html'
})

export class ReactiveFormComponent implements OnInit {
    regForm: FormGroup;

    constructor(private frmBuilder: FormBuilder) { }

    ngOnInit() {
        this.regForm = this.frmBuilder.group({
            firstname: ["", Validators.required],
            lastname: ["", Validators.compose([
                Validators.required,
                Validators.minLength(2),
                Validators.maxLength(5)
            ])],
            address: this.frmBuilder.group({
                city: ["", Validators.required],
                zip: 0
            })
        })
    }

    get frm() { return this.regForm.controls; }

    logForm() {
        console.log(this.regForm.value);
    }
}

// // 2. FormBuilder
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder } from '@angular/forms';

// @Component({
//     selector: 'reactive-form',
//     templateUrl: 'reactive.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     regForm: FormGroup;

//     constructor(private frmBuilder: FormBuilder) { }

//     ngOnInit() {
//         this.regForm = this.frmBuilder.group({
//             firstname: "",
//             lastname: "",
//             address: this.frmBuilder.group({
//                 city: "",
//                 zip: 0
//             })
//         })
//     }

//     logForm() {
//         console.log(this.regForm.value);
//     }
// }

// 1. FormGroup and FormControl
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

// @Component({
//     selector: 'reactive-form',
//     templateUrl: 'reactive.component.html'
// })

// export class ReactiveFormComponent implements OnInit {
//     regForm: FormGroup;

//     constructor() { }

//     ngOnInit() {
//         this.regForm = new FormGroup({
//             firstname: new FormControl(),
//             lastname: new FormControl(),
//             address: new FormGroup({
//                 city: new FormControl(),
//                 zip: new FormControl()
//             })
//         })
//     }

//     logForm(){
//         console.log(this.regForm.value);
//     }
// }