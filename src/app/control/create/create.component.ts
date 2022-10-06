import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cardapio } from '../cardapio';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    cardForm:Cardapio = {
    id: 0,
    name:'',
    image:'',
    desc: '',
    type:'',
    price: 0,

  }

  constructor(private controlService: ControlService, private router:Router) { }

  ngOnInit(): void {
  }

  createCard() {
    this.controlService.create(this.cardForm).subscribe({
      next:(data) =>{
        this.router.navigate([`cardapio/home/${this.cardForm.type}`])
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

}
