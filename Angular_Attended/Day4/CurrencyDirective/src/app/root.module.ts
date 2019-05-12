import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RootComponent } from "./root.component";
import { MycurrencyDirective } from "./directive/mycurrency.directive";
import { MycurrencyPipe } from "./pipe/mycurrency.pipe";

@NgModule({
    imports: [BrowserModule, FormsModule],
    providers: [MycurrencyPipe],
    declarations: [RootComponent, MycurrencyDirective, MycurrencyPipe],
    bootstrap: [RootComponent]
})
export class RootModule { }