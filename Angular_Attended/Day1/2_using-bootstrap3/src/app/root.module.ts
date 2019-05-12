import { NgModule } from "@angular/core";
import { HelloComponent } from "./hello.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [BrowserModule],
    declarations: [HelloComponent],
    bootstrap: [HelloComponent] // Default Boostrapping
})
export class RootModule {
    // Manual Boostrapping
    // ngDoBootstrap(){
    // }
}