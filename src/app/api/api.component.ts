import { ApiService } from './../servives/api.service';
import { Component, OnInit } from '@angular/core';
import { Imagem } from '../models/foto';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  imagens:any;
  error:any;

  constructor(private apiService: ApiService) { 

    this.pegarImagem();
  }

  ngOnInit() {
  }

  pegarImagem(){

    this.apiService
    .getImg()
    .subscribe((data:Imagem) =>{
      this.imagens = data;
      console.log(this.imagens);
    },(error:any)=>{
      this.error = error;
      console.log(this.error);
    });
  }



}
