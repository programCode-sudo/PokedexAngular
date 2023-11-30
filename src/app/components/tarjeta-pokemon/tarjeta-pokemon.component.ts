import { Component, Input, OnChanges, SimpleChanges,Output, EventEmitter } from '@angular/core';
import { Resultado } from '../../interfaces/pokeapi';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrl: './tarjeta-pokemon.component.css'
})

export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonService:PokemonService){}


  ngOnChanges(changes: SimpleChanges): void {
    this.estraerInformacion();
  }
 
  @Input() data?:Resultado;
  id:string="0";
  @Output() clickeado=new EventEmitter<string>();
  @Input() fullData?:Pokemon;
  @Input() seleccionado:boolean=false;

  estraerInformacion(){
    if(this.data && this.data.url !==""){
      this.id=this.data.url.substring(34,this.data.url.length-1);
      return;
    }
    if(this.fullData){
      this.id=this.fullData.species.url.substring(42,this.fullData.species.url.length-1);
      this.data={
        name:this.fullData.species.name,
        url:""
      }

    }
  }
}
