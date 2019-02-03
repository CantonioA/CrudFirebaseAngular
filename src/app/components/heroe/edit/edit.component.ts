import { Component, OnInit } from '@angular/core';
import { HeroeI } from '../../../interfaces/heroe.interface';
import { HeroesService } from '../../../services/heroes.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

   heroe: HeroeI = {
    nombre: '',
    casa: 'Marvel',
    bio: ''
  };
   nuevo = false;
    id: String;
   constructor( private _heroService: HeroesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(parametros => {
      console.log(parametros);
      this.id = parametros['id'];
   if (this.id !== 'nuevo') {
    this._heroService.getHeroe(this.id) .subscribe(data => this.heroe = data);
   }

    });
   }

  ngOnInit() {
  }
  guardar() {

    if (this.id === 'nuevo') {
      console.log(this.heroe);
      this._heroService.nuevoHeroe(this.heroe) .subscribe(data => {   // data is a string
     /*    console.log(data); */
      this.router.navigate(['/heroe', data.name]);
      },
       error => console.error(error));
    } else {
      this._heroService.actualizarHeroe(this.heroe, this.id) .subscribe(data => {   // data is a string
        /*    console.log(data); */
        console.log('editando');
      console.log(data);
      this.heroe = data;
         },
          error => console.error(error));
    }
  }
}
