import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { COneComponent } from "./cone.component";
import { CTwoComponent } from "./ctwo.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [COneComponent, CTwoComponent],
    bootstrap: [COneComponent, CTwoComponent],
    providers: [{
        provide: APP_BOOTSTRAP_LISTENER, multi: true, useFactory: () => {
            return (component: ComponentRef<any>) => {
                console.log(component);
            }
        }
    }]
})
export class RootModule {
}