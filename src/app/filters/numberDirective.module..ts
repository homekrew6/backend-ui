
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './numberOnly.directive';

@NgModule({
    declarations: [NumberOnlyDirective],
    exports: [NumberOnlyDirective]
})
export class NumberDirectiveModule { }