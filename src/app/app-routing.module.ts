import { NgModule }      from '@angular/core';
import { RouterModule }   from '@angular/router';

import { DocDetailComponent } from './doc-detail.component';
import { DocsComponent } from './docs.component';


const routes  = [
  {
    path: '',
    redirectTo: '/docs',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: DocDetailComponent
  },
  {
    path: 'docs',
    component: DocsComponent
  }
];

@NgModule({
  imports:      [RouterModule.forRoot(routes)],
  exports:      [RouterModule]
})
export class AppRoutingModule { }
