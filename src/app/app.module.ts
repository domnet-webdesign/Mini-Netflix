import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NetflixAppComponent } from './Netflix-app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MainBannerComponent } from './main-banner/main-banner.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './image/shared/image.service';

@NgModule({
  declarations: [
    NetflixAppComponent,
    NavbarComponent,
    MainBannerComponent,
    ImageDetailComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()

  ],

  providers: [ImageService],
  bootstrap: [NetflixAppComponent]
})
export class AppModule { }
