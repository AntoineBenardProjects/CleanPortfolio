import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ExperiencePageComponent } from '../../components/experience-page/experience-page.component';
import { BelTexts } from '../../models/texts/bel';
import { PageInfos } from '../../models/texts/types';
import { PageTitleService } from '../../services/page.service';

@Component({
  selector: 'app-bel',
  imports: [
    ExperiencePageComponent
  ],
  templateUrl: './bel.component.html',
  styleUrl: './bel.component.scss'
})
export class BelComponent {

  public pageInformations: PageInfos = BelTexts;
  
  constructor(
    private metaService: Meta,
    private titleService: Title,
    private pageTitleService: PageTitleService
  ){}
  
  ngOnInit(): void{
    this.titleService.setTitle("Expérience Groupe Bel | Développement fullstack React Angular NodeJS");
    const description = "Entrez dans ma première expérience professionnelle en tant que développeur fullstack dans un grand groupe.";
    this.metaService.updateTag({ name: 'description', content: description });
    this.pageTitleService.setPageTitle("Groupe Bel");
  }
}
