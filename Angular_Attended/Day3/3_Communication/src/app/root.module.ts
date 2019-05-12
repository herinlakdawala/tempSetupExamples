import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { ListComponent } from "./list/list.component";
import { CounterComponent } from "./counter/counter.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [RootComponent, ListComponent, CounterComponent],
    bootstrap: [RootComponent]
})
export class RootModule {
}