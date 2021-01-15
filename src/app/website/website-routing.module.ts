import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';


import { HeaderComponent } from './COMMON/header/header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CareersComponent } from './careers/careers.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { TherapyComponent } from './therapy/therapy.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: WebsiteComponent,
  children:[
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'aboutus', component: AboutusComponent
  },
  {
    path: 'product-portfolio', component: ProductComponent
  },
  {
    path: 'therapy-areas', component: TherapyComponent
  },
  {
    path: 'gallery', component: GalleryComponent
  },
  {
    path: 'careers', component: CareersComponent
  },
  {
    path: 'updates', component: BlogComponent
  },
  {
    path: 'contactus', component: ContactComponent
  },
  {
    path: '404', component: HomeComponent
  },
  {
    path: '**', component: HomeComponent
  }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
