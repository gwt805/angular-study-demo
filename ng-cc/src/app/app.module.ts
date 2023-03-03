import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { GlobalInterceptor } from './global.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignComponent } from './sign/sign.component';
import { SignoupComponent } from './signoup/signoup.component';
import { UListComponent } from './u-list/u-list.component';
import { UNewComponent } from './u-new/u-new.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagNewComponent } from './tag-new/tag-new.component';
import { TagEditComponent } from './tag-edit/tag-edit.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SignComponent,
    SignoupComponent,
    UListComponent,
    UNewComponent,
    UEditComponent,
    TagListComponent,
    TagNewComponent,
    TagEditComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: GlobalInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
