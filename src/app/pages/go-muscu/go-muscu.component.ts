import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ExperiencePageComponent } from '../../components/experience-page/experience-page.component';
import { GoMuscuTexts } from '../../models/texts/goMuscu';
import { PageInfos } from '../../models/texts/types';
import { PageTitleService } from '../../services/page.service';

@Component({
  selector: 'app-go-muscu',
  imports: [
    ExperiencePageComponent
  ],
  templateUrl: './go-muscu.component.html',
  styleUrl: './go-muscu.component.scss'
})
export class GoMuscuComponent {
  
  public pageInformations: PageInfos = GoMuscuTexts;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private pageTitleService: PageTitleService
  ){}
  
  ngOnInit(): void{
    this.titleService.setTitle("Application GoMuscu | Développement front-end Angular | Déploiement Firebase");
    const description = "Projet GoMuscu : découvrez un site web responsive ergonomique développé sous Angular et Firebase.";
    this.metaService.updateTag({ name: 'description', content: description });
    this.pageTitleService.setPageTitle("NiceToMealYou");
  }
}
