import { NgModule, APP_BOOTSTRAP_LISTENER, ComponentRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { RootComponent } from "./root.component";
import { MOneModule } from "./m-one/m-one.module";
import { MTwoModule } from "./m-two/m-two.modules";

@NgModule({
    imports: [BrowserModule, MOneModule, MTwoModule],
    declarations: [RootComponent],
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