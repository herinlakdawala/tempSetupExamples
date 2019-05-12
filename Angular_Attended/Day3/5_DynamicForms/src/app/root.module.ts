import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { DynamicFormComponent } from "../dynamic-form/d-form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [RootComponent, DynamicFormComponent],
    bootstrap: [RootComponent]
})
export class RootModule {
}