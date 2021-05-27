import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { AgentsComponent } from './pages/agents/agents.component';
import { AgentComponent } from './pages/agent/agent.component';
import { AffiliatesComponent } from './pages/affiliates/affiliates.component';
import { AffiliateListingComponent } from './pages/affiliate-listing/affiliate-listing.component';
import { RegisterComponent } from './pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListingsComponent,
    ListingComponent,
    BlogComponent,
    PostComponent,
    ContactComponent,
    ErrorComponent,
    NavbarComponent,
    FooterComponent,
    FormComponent,
    LeadcapComponent,
    AgentsComponent,
    AgentComponent,
    AffiliatesComponent,
    AffiliateListingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
