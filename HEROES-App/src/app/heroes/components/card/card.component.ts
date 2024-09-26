import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input()
  public Hero!:Hero;

  ngOnInit(): void {
    if(!this.Hero) throw Error('hero property is required');
    
  }

}
