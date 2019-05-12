import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ModelBasedFormComponent } from "./model-based/model-based.component";
import { TemplatedFormComponent } from "./templated/templated.component";
import { ReactiveFormComponent } from "./reactive/reactive.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, ModelBasedFormComponent, TemplatedFormComponent,
        ReactiveFormComponent],
    bootstrap: [RootComponent]
})
export class RootModule {
}