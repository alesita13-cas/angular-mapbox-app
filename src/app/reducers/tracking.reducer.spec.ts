import { trackingReducer, initialState, trackClick, resetTracking } from './tracking.reducer';

describe('trackingReducer', () => {

  it('debe retornar el estado inicial', () => {
    const action = { type: '@@INIT' } as any;
    const state = trackingReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('debe incrementar el contador al trackear un click', () => {
    const action = trackClick({ tag: 'boton-test' });
    const state = trackingReducer(initialState, action);
    expect(state.clicks['boton-test']).toBe(1);
  });

  it('debe acumular clicks en el mismo tag', () => {
    let state = trackingReducer(initialState, trackClick({ tag: 'boton-test' }));
    state = trackingReducer(state, trackClick({ tag: 'boton-test' }));
    expect(state.clicks['boton-test']).toBe(2);
  });

  it('debe resetear el estado', () => {
    let state = trackingReducer(initialState, trackClick({ tag: 'boton-test' }));
    state = trackingReducer(state, resetTracking());
    expect(state).toEqual(initialState);
  });

});
