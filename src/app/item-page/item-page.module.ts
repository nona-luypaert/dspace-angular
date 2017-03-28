import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPageComponent } from './item-page.component';
import { ItemPageRoutingModule } from './item-page-routing.module';
import { ItemPageFieldComponent } from './generic-field/item-page-field.component';
import { ItemPageFieldWrapperComponent } from './field-wrapper/item-page-field-wrapper.component';
import { ItemPageAuthorFieldComponent } from './specific-field/author/item-page-author-field.component';
import { ItemPageDateFieldComponent } from './specific-field/date/item-page-date-field.component';
import { ItemPageAbstractFieldComponent } from './specific-field/abstract/item-page-abstract-field.component';
import { ItemPageUriFieldComponent } from './specific-field/uri/item-page-uri-field.component';
import { ItemPageTitleFieldComponent } from './specific-field/title/item-page-title-field.component';
import { ItemPageSpecificFieldComponent } from './specific-field/item-page-specific-field.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
    declarations: [
        ItemPageComponent,
        ItemPageFieldComponent,
        ItemPageFieldWrapperComponent,
        ItemPageAuthorFieldComponent,
        ItemPageDateFieldComponent,
        ItemPageAbstractFieldComponent,
        ItemPageUriFieldComponent,
        ItemPageTitleFieldComponent,
        ItemPageSpecificFieldComponent,
    ],
    imports: [
        ItemPageRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class ItemPageModule {
}
