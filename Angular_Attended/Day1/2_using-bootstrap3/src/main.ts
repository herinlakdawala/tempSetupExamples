import '../public/favicon.ico';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootModule } from './app/root.module';
import { ApplicationRef } from '@angular/core';

platformBrowserDynamic().bootstrapModule(RootModule).then((module)=>{
    let appRef = module.injector.get(ApplicationRef);
    // console.log(appRef);
    let rootCompRef = appRef.components[0];
    console.log(rootCompRef);
})