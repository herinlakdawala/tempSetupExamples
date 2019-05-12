import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { COneComponent } from "./c-one/cone.component";
import { IconInputComponent } from "./icon-input/icon-input.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, COneComponent, IconInputComponent],
    bootstrap: [RootComponent]
})
export class RootModule {
}