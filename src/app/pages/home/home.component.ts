import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HomeExperiences, HomeOffers } from '../../models/texts/home';
import { Experience, OffersInfos } from '../../models/texts/types';
import { ExperienceComponent } from '../../components/experience/experience.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { OffersComponent } from '../../components/offers/offers.component';
import { AnimationsService } from '../../services/animations.service';
import { PageTitleService } from '../../services/page.service';

@Component({
  selector: 'app-home',
  imports: [
    ExperienceComponent,
    OffersComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  public readonly experiences: Experience[] = HomeExperiences;
  public readonly offers: OffersInfos[] = HomeOffers;

  public actualPercent: number = 0;
  public changeBackgroundColor: boolean = false;

  public labelsOpacity: number[] = [];

  private scrollEventHandler: ((event: Event) => void) | undefined;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) private platformId: Object,
    private animationsService: AnimationsService,
    private pageTitleService: PageTitleService
  ){}

  ngOnInit(): void{
    this.labelsOpacity = Array(this.experiences.length).fill(0);
    this.titleService.setTitle("Antoine Bénard | Développeur web Angular | Automatisation Typescript");
    const description = "Ingénieur logiciel spécialisé dans l'automatisation, je développe des sites modernes et des scripts performants avec Angular et Typescript. Découvrez mes projets.";
    this.metaService.updateTag({ name: 'description', content: description });
    this.pageTitleService.setPageTitle("Accueil");
  }

  ngAfterViewInit(): void{
    if (isPlatformBrowser(this.platformId)) {
      this.setTextAppearsAnimations();
    }
  }

  private setTextAppearsAnimations(){
    this.animationsService.sideAppears();
    this.animationsService.appears();
    this.scrollEventHandler = this.setAnimations.bind(this);
    window.addEventListener("scroll", this.scrollEventHandler);
  }

  private setAnimations() {
    this.animationsService.sideAppears();
    this.animationsService.appears();
    this.setShowExperienceTitleLabelAnimation();
    // this.setShowBillsTitleAnimation();
  }

  private setShowBillsTitleAnimation(): void{
    const percent = this.animationsService.titleAnimations("billsTitle", true);
    if(percent > 50){
      this.changeBackgroundColor = true;
    } else{
      this.changeBackgroundColor = false
    }
  }

  private setShowExperienceTitleLabelAnimation(): void{
    const percent = this.animationsService.titleAnimations("experienceTitle");
    this.actualPercent = percent;
    const nbLabelsoShow: number = 6;
    const percentValueToChangeLabel: number = 100/(nbLabelsoShow+2);
    this.experiences.forEach((experience,index) => {
      const maxPercent: number = (index + 2)* percentValueToChangeLabel;
      const minPercent: number = (index + 1)* percentValueToChangeLabel;
      if(percent < minPercent || percent > maxPercent){
        this.labelsOpacity[index] = 0;
      } 
      else{
        const difference: number = maxPercent - minPercent;
        const partMade: number = percent - minPercent;
        const maxOpacity: number = difference/4;
        const startFallOpacity: number = 3 * difference/4;
        if(partMade > startFallOpacity){
          const fallPartMade: number = percent - minPercent - startFallOpacity;
          const opacity: number = 1 - fallPartMade/maxOpacity;
          this.labelsOpacity[index] = opacity;
        } 
        else{
          const opacity: number = partMade/maxOpacity;
          this.labelsOpacity[index] = opacity;
        }
      }
    });
    const isOneLabelShowed: boolean = this.labelsOpacity.find(opacity => opacity !== 0) != null;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener("scroll", this.scrollEventHandler!);
    }
  }
}
