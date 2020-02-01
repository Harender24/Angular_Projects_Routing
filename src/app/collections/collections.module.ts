import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHoneComponent } from './collections-hone/collections-hone.component';


@NgModule({
  declarations: [CollectionsHoneComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports: []
})
export class CollectionsModule { }
