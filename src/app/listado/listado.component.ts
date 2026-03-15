import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { trackClick, TrackingState } from '../reducers/tracking.reducer';

@Component({
  selector: 'app-listado',
  template: `
    <div>
      <h2>📊 Tracking de Clicks</h2>
      <ul>
        <li *ngFor="let item of items">
          <span trackClick [trackingTag]="item.tag">
            {{ item.nombre }}
          </span>
          <strong> Clicks: {{ (clicks$ | async)?.[item.tag] || 0 }}</strong>
        </li>
      </ul>
      <button trackClick trackingTag="boton-reset">
        Botón trackeado
      </button>
    </div>
  `
})
export class ListadoComponent implements OnInit {
  clicks$: Observable<{ [tag: string]: number }>;

  items = [
    { nombre: 'Elemento A', tag: 'elemento-a' },
    { nombre: 'Elemento B', tag: 'elemento-b' },
    { nombre: 'Elemento C', tag: 'elemento-c' }
  ];

  constructor(private store: Store<{ tracking: TrackingState }>) {
    this.clicks$ = this.store.select(state => state.tracking.clicks);
  }

  ngOnInit() {}
}
