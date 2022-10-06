import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../cardapio';
import { CardapioService } from '../cardapio.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allCardapio: Cardapio[] = [];

  constructor(
    private cadapioService: CardapioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      let type: any = param.get('type');
      this.getCardapio(type);
    });
  }

  getCardapio(type: any) {
    this.cadapioService.get(type).subscribe((data) => {
      this.allCardapio = data;
    });
  }
}
