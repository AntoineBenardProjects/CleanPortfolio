import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ExperiencePageComponent } from '../../components/experience-page/experience-page.component';
import { MossTexts } from '../../models/texts/moss';
import { PageInfos } from '../../models/texts/types';
import { PageTitleService } from '../../services/page.service';

@Component({
  selector: 'app-moss',
  imports: [
    ExperiencePageComponent
  ],
  templateUrl: './moss.component.html',
  styleUrl: './moss.component.scss'
})
export class MossComponent {

  public pageInformations: PageInfos = MossTexts;
  
  constructor(
    private metaService: Meta,
    private titleService: Title,
    private pageTitleService: PageTitleService
  ){}
  
  ngOnInit(): void{
    this.titleService.setTitle("Mission chez MOSS SAS | Développement front-end Angular | Spécification technique du besoin");
    const description = "Mission chez MOSS SAS : mon travail de développeur Angular couplé à du recueil de besoins";
    this.metaService.updateTag({ name: 'description', content: description });
    this.pageTitleService.setPageTitle("MOSS SAS");
  }
}
