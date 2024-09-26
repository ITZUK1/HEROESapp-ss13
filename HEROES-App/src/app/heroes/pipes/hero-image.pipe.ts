import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(Hero: Hero): string {

    if (!Hero.id && !Hero.alt_img){
      return 'assets/no-image.png;'
    }
    if(Hero.alt_img)return Hero.alt_img //https://google.com/flash.png

    return `assets/heroes/${Hero.id}.jpg`;
  }

}
