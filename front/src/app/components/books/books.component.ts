// Componentes //

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { NgForm } from '@angular/forms';
import { Books } from '../../models/books';

declare var M: any;


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ServicesService]
})
export class BooksComponent implements OnInit {

  constructor(private servicesservice : ServicesService) { }

  ngOnInit() {this.getsBooks(),this.getFromBitso()}

  // Solicitud con la API Bitso //

  async getFromBitso () {
    var data = await fetch('https://api.bitso.com/v3/available_books/');
    const myJson = await data.json();
    console.log(myJson);
    return myJson;
  }
  
 // Guardar libros de bitso //

  postsBooks(form?:NgForm){
    console.log(form.value);
    if(form.value.book){
      this.servicesservice.postBook(form.value)
        .subscribe(res=> {
          this.getFromBitso();
          console.log('Correcto');
        });
    }else{
      this.servicesservice.postBook(form.value)
        .subscribe(res => {
          this.getFromBitso();
          console.log('Guardado');
        });
    }
  }

// Obtener Libros de Bitso //

  getsBooks(){
    this.servicesservice.getBook()
    .subscribe(res=>{
      this.servicesservice.sbooks = res as Books[];
    })
  }
}
