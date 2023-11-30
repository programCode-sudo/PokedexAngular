import { Component,Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-foto-pokemon',
  templateUrl: './foto-pokemon.component.html',
  styleUrl: './foto-pokemon.component.css'
})
export class FotoPokemonComponent {
  @Input()pokemon?:Pokemon;
}
