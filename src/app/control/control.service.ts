import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cardapio } from './cardapio';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  constructor(private http: HttpClient) {}

  create(payload: Cardapio) {
    return this.http.post<Cardapio>('http://localhost:3000/produtos', payload);
  }
  getById(id: number) {
    return this.http.get<Cardapio>(`http://localhost:3000/produtos/${id}`);
  }
  update(payload: Cardapio) {
    return this.http.put(
      `http://localhost:3000/produtos/${payload.id}`,
      payload
    );
  }
  get() {
    return this.http.get<Cardapio[]>(`http://localhost:3000/produtos`);
  }

  delete(id: number) {
    return this.http.delete<Cardapio>(`http://localhost:3000/produtos/${id}`);
  }
}
