import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WaterDamageComponent } from './services/water-damage/water-damage.component';
import { FireDamageComponent } from './services/fire-damage/fire-damage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { QuoteBoxComponent } from './services/quote-box/quote-box.component';
import { MoldRemovalComponent } from './services/mold-removal/mold-removal.component';
import { BiohazardComponent } from './services/biohazard/biohazard.component';
import { CommercialServicesComponent } from './services/commercial-services/commercial-services.component';
import { TabServiceService } from './tab-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OurWorkComponent,
    CareersComponent,
    ContactUsComponent,
    WaterDamageComponent,
    FireDamageComponent,
    AboutUsComponent,
    QuoteBoxComponent,
    MoldRemovalComponent,
    BiohazardComponent,
    CommercialServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
  ],
  providers: [HeaderComponent, TabServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
