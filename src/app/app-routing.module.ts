import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { ListingComponent } from './pages/listing/listing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/form/form.component';
import { LeadcapComponent } from './components/leadcap/leadcap.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'listings', component: ListingsComponent },
  {path: 'listings/:id', component: ListingComponent },
  {path: 'blog', component: BlogComponent },
  {path: 'blog/:id', component: PostComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'error', component: ErrorComponent },
  {path: 'navbar', component: NavbarComponent },
  {path: 'footer', component: FooterComponent },
  {path: 'form', component: FormComponent },
  {path: 'leadcap', component: LeadcapComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
