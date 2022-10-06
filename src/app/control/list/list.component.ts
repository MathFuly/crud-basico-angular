import { Cardapio } from './../../cardapio/cardapio';
import { ControlService } from './../control.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  allCardapio: Cardapio[] = [];

  constructor(private controlService: ControlService) {}

  ngOnInit(): void {
    this.getCardapio();
  }

  getCardapio() {
    this.controlService.get().subscribe((data) => {
      this.allCardapio = data;
    });
  }
}
