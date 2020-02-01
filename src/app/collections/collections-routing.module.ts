import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsHoneComponent } from './collections-hone/collections-hone.component';

const routes: Routes = [
  {
    path: 'collection',
    component: CollectionsHoneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
