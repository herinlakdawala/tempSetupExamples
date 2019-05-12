import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ChangeContentDirective } from "./directives/cc.directive";
import { ListComponent } from "./list/list.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ChangeContentDirective, ListComponent],
    bootstrap: [RootComponent]
})
export class RootModule {
}