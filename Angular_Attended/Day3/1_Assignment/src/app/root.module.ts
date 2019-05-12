import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { SharedModule } from "./shared-module/shared.module";

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule],
    declarations: [RootComponent],
    bootstrap: [RootComponent]
})
export class RootModule {
}