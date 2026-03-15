import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-mapa',
  template: `
    <div class="mapa-container" [@mapState]="visible ? 'visible' : 'hidden'">
      <h2>🗺️ Mapa</h2>
      <mgl-map
        [style]="'mapbox://styles/mapbox/streets-v11'"
        [zoom]="[9]"
        [center]="[-74.006, 40.7128]">
        <mgl-marker [lngLat]="[-74.006, 40.7128]">
          <div (click)="mostrarPopover()" class="marker">📍</div>
        </mgl-marker>
        <mgl-popup *ngIf="popoverVisible" [lngLat]="[-74.006, 40.7128]">
          <p>¡Hola! Este es Nueva York 🗽</p>
        </mgl-popup>
      </mgl-map>
      <button (click)="toggleMapa()" trackClick trackingTag="boton-mapa">
        {{ visible ? 'Ocultar mapa' : 'Mostrar mapa' }}
      </button>
    </div>
  `,
  animations: [
    trigger('mapState', [
      state('visible', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidden', style({ opacity: 0, transform: 'scale(0.8)' })),
      transition('visible <=> hidden', animate('300ms ease-in-out'))
    ])
  ]
})
export class MapaComponent {
  visible = true;
  popoverVisible = false;

  toggleMapa() { this.visible = !this.visible; }
  mostrarPopover() { this.popoverVisible = !this.popoverVisible; }
}
