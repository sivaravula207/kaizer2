import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { FooterComponent } from './COMMON/footer/footer.component';
import { HeaderComponent } from './COMMON/header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { TherapyComponent } from './therapy/therapy.component';
import { ProductComponent } from './product/product.component';
import { TimelineComponent } from './timeline/timeline.component';



@NgModule({
  declarations: [WebsiteComponent, FooterComponent, HeaderComponent,
    ProductComponent,
  AboutusComponent,
  CareersComponent,
  BlogComponent,
  GalleryComponent,
  ContactComponent,
  HomeComponent,
  TherapyComponent,
  TimelineComponent
],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
