import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHoneComponent } from './collections-hone/collections-hone.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [CollectionsHoneComponent, TableComponent, BiographyComponent, CompaniesComponent, PartnerComponent],
  imports: [
    CommonModule,
    CollectionsRoutingModule, SharedModule
  ],
  exports: []
})
export class CollectionsModule { }
