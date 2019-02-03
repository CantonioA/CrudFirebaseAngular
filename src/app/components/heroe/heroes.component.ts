import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroe: any;
  loadin: boolean;
  constructor(private _heroesService: HeroesService) {
    this.loadin = true;
    this._heroesService.listarHeroes().subscribe(lstHeroes => {
    this.heroe = lstHeroes;
    this.loadin = false;
    });
  }

  ngOnInit() {
  }

  borrarHeroe( key: String) {
    this._heroesService.borrarHeroe(key).subscribe(respuesta => {
    if (respuesta) {
     console.error(respuesta);
     } else {
     delete this.heroe[ key ];
     }
       }     );

  }

}

