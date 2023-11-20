import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ClientComponent } from './client/client.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyUsSectionComponent } from './why-us-section/why-us-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { TeamSectionComponent } from './team-section/team-section.component';
import { PricingSectionComponent } from './pricing-section/pricing-section.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

  {path:"header", component:HeaderComponent},
  {path:"hero", component:HeroComponent},
  {path:"client", component:ClientComponent},
  {path:"about", component:AboutusComponent},
  {path: "why-us-section", component: WhyUsSectionComponent},
  {path:'skills-section', component: SkillsSectionComponent},
  {path:'cta-section', component: CtaSectionComponent},
  {path:'protfolio', component: ProtfolioComponent},
  {path:'team-section', component: TeamSectionComponent},
  {path:'pricing-section', component: PricingSectionComponent},
  {path:'ask-question', component: AskQuestionComponent},
  {path:'contact', component: ContactComponent},
  {path:'footer', component: FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
