import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ClientComponent } from './client/client.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ClientComponent,
    AboutusComponent,
    WhyUsSectionComponent,
    SkillsSectionComponent,
    ServicesSectionComponent,
    CtaSectionComponent,
    ProtfolioComponent,
    TeamSectionComponent,
    PricingSectionComponent,
    AskQuestionComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
