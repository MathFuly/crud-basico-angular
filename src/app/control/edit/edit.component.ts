import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cardapio } from '../cardapio';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

      cardForm:Cardapio = {
    id: 0,
    name:'',
    image:'',
    desc: '',
    type:'',
    price: 0,

  }

  constructor(private controlService: ControlService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
        this.route.paramMap.subscribe ((param) => {
    var id = Number(param.get('id'));
    this.getProduto(id);
  })
  }

  getProduto(id:number){
    this.controlService.getById(id)
    .subscribe((data) =>{
      this.cardForm = data
    })
  }

    updateProduto(){
    this.controlService.update(this.cardForm)
    .subscribe({
      next:(data) => {
        this.router.navigate([`cardapio/home/${this.cardForm.type}`]);
      },
      error:(error) => {
        console.log(error);
      }
    })
  }

}
