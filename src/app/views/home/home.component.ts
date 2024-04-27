import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public titulo!:string;
  public texto!: string;



  ngOnInit(): void {
    
    this.titulo! = 'Esse é o texto do titulo';
    this.texto! = 'O texto jdaps aspjdpsa aspjd pasjd sa dpsa dsaj djasp djas dasp dpas pdjasp pas psad p dasp d'
  }

  onSubmit(form: NgForm){
    let dados = `
      Nome: ${form.value.nome}
      Email: ${form.value.email}
      Senha: ${form.value.password}
    `;

    console.log(dados);
   }
  
  

}
