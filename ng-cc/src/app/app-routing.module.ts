import { SignComponent } from './sign/sign.component';
import { SignoupComponent } from './signoup/signoup.component';

import { UListComponent } from './u-list/u-list.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UNewComponent } from './u-new/u-new.component';

import { TagListComponent } from './tag-list/tag-list.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';

import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
   path: '',
  //  redirectTo: 'contacts',
  //  pathMatch: 'full'
   component: SignComponent
  },
  {
    path:'contacts',
    component: LayoutComponent,
    canActivate: [AuthGuard], // 在导航 contacts 在进入到导航之前会进入路由守卫
    children:  [
      {
        path:'',
        component: UListComponent
      },
      {
        path: 'new',
        component: UNewComponent
      },
      {
        path: 'edit/:id',

        component: UEditComponent
      }
    ]
  },
  {
    path:'tags',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children:  [
      {
        path:'',
        component: TagListComponent
      },
      {
        path: 'new',
        component: UNewComponent
      },
      {
        path: 'edit',
        component: UEditComponent
      }
    ]
  },
  {
    path: 'signin',
    component: SignComponent
  },
  {
    path: 'signup',
    component: SignoupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
