import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnChanges{
  constructor(private pokemonService:PokemonService){}

  ngOnChanges():void{
    if(this.pokemon){
      this.pokemonService.getDescripcion(this.pokemon?.id).then((res)=>{
        this.descripcion=res;
      });
    }
  }

  @Input() pokemon?:Pokemon;
  @Input() abierto:boolean=false;
  @Output() clicked = new EventEmitter();
  descripcion:string="";
}
