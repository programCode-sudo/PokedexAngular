import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Resultado } from '../../interfaces/pokeapi';
import { Pokemon } from '../../interfaces/pokemon';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @ViewChild('tarjetas') tarjetasElements!: ElementRef;
  listaPokemon: Resultado[] = [];
  pagina: number = 0;
  cargando:boolean=false;
  pokemonSeleccionado?:Pokemon;
  detalle:boolean=false;

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById("1");
  }

  async cargarLista() {
    this.cargando=true;
    this.listaPokemon = [
      ...this.listaPokemon,
      ...(await this.pokemonService.getByPage(this.pagina)),
    ];
    console.log(this.listaPokemon);
    this.pagina++;
    this.cargando=false;
  }

  onScroll(e: any) {
    if(this.cargando)return;
    if (
      Math.round(
        this.tarjetasElements.nativeElement.clientHeight +
          this.tarjetasElements.nativeElement.scrollTop
      ) === e.srcElement.scrollHeight
    ) {
      this.cargarLista();
    }
  }

  async tarjetaClickeada(e:string){
    if(this.pokemonSeleccionado && e === this.pokemonSeleccionado?.id.toString()){
      return this.cambiarEstadoDetalle();
    }
    this.pokemonSeleccionado= await this.pokemonService.getById(e);
  }

  cambiarEstadoDetalle(){
    if(this.pokemonSeleccionado){this.detalle= !this.detalle}
    console.log(this.detalle);
  }
}
