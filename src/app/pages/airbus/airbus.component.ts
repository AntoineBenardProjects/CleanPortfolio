import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ExperiencePageComponent } from '../../components/experience-page/experience-page.component';
import { AirbusTexts } from '../../models/texts/airbus';
import { PageInfos } from '../../models/texts/types';
import { PageTitleService } from '../../services/page.service';

@Component({
  selector: 'app-airbus',
  imports: [
    ExperiencePageComponent
  ],
  templateUrl: './airbus.component.html',
  styleUrl: './airbus.component.scss'
})
export class AirbusComponent {

  public pageInformations: PageInfos = AirbusTexts;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private pageTitleService: PageTitleService
  ){}
  
  ngOnInit(): void{
    this.titleService.setTitle("Mission Airbus | Développement front-end Angular | Lead développeur");
    const description = "Airbus est mon expérience de développeur Angular la plus aboutie. Grâce à mes compétences, j'ai pu y devenir le référent technique Angular.";
    this.metaService.updateTag({ name: 'description', content: description });
    this.pageTitleService.setPageTitle("Airbus");
  }
}
