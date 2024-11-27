import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  public changeHero(): void {
    this.name = 'CaptainAmerica';
  }
  public changeAge(): void {
    this.age = 100;
  }
  public resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
