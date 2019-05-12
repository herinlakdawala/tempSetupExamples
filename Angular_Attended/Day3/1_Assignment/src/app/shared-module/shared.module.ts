import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { ListComponent } from './components/list/list.component';

@NgModule({
    imports: [CommonModule],
    exports: [HighlightDirective, ListComponent],
    declarations: [HighlightDirective, ListComponent],
})
export class SharedModule { }
