import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { COneComponent } from "./c-one/cone.component";
import { CTwoComponent } from "./c-two/ctwo.component";
import { RootComponent } from "./root.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [COneComponent, CTwoComponent, RootComponent],
    bootstrap: [RootComponent],
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