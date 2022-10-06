import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cardapio } from './cardapio';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  constructor(private http: HttpClient) {}

  get(type: any) {
    return this.http.get<Cardapio[]>(
      `http://localhost:3000/produtos?type=${type}`
    );
  }
}
