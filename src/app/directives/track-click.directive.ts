import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { trackClick } from '../reducers/tracking.reducer';

@Directive({
  selector: '[trackClick]'
})
export class TrackClickDirective implements OnInit {
  @Input() trackingTag: string = 'default';

  constructor(
    private el: ElementRef,
    private store: Store
  ) {}

  ngOnInit() {
    this.el.nativeElement.addEventListener('click', () => {
      this.store.dispatch(trackClick({ tag: this.trackingTag }));
    });
  }
}
