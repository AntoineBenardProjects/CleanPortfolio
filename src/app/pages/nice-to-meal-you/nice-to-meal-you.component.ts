import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ExperiencePageComponent } from '../../components/experience-page/experience-page.component';
import { NiceToMealYouTexts } from '../../models/texts/niceToMealYou';
import { PageInfos } from '../../models/texts/types';
import { PageTitleService } from '../../services/page.service';

@Component({
  selector: 'app-nice-to-meal-you',
  imports: [
    ExperiencePageComponent
  ],
  templateUrl: './nice-to-meal-you.component.html',
  styleUrl: './nice-to-meal-you.component.scss'
})
export class NiceToMealYouComponent {
  
  public pageInformations: PageInfos = NiceToMealYouTexts;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private pageTitleService: PageTitleService
  ){}
  
  ngOnInit(): void{
    this.titleService.setTitle("Projet NiceToMealYou | Développement fullstack Angular NodeJS | Déploiement Docker");
    const description = "De la conception au design via Figma jsuqu'au développement via Angular et NodeJS, NiceToMealYou est mon projet le plus ambitieux.";
    this.metaService.updateTag({ name: 'description', content: description });
    this.pageTitleService.setPageTitle("NiceToMealYou");
  }
}
