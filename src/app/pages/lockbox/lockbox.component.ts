import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LockboxTexts } from '../../models/texts/lockbox';
import { PageInfos } from '../../models/texts/types';
import { ExperiencePageComponent } from '../../components/experience-page/experience-page.component';
import { PageTitleService } from '../../services/page.service';

@Component({
  selector: 'app-lockbox',
  imports: [
    ExperiencePageComponent
  ],
  templateUrl: './lockbox.component.html',
  styleUrl: './lockbox.component.scss'
})
export class LockboxComponent {

  public pageInformations: PageInfos = LockboxTexts;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    private pageTitleService: PageTitleService
  ){}
  
  ngOnInit(): void{
    this.titleService.setTitle("Projet Lockbox | Développement web responsive | Fullstack React NodeJS");
    const description = "Découvrez mon expérience Lockbox : mon premier travail de lead développeur fullstack React, NodeJS sur un logiciel performant.";
    this.metaService.updateTag({ name: 'description', content: description });
    this.pageTitleService.setPageTitle("Lockbox");
  }
}
