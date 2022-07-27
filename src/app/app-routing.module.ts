import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { FireDamageComponent } from './services/fire-damage/fire-damage.component';
import { WaterDamageComponent } from './services/water-damage/water-damage.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: OurWorkComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'waterdmg', component: WaterDamageComponent },
  { path: 'firedmg', component: FireDamageComponent },
  { path: 'about', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
