describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then($el => expect($el).to.have.value(75));
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#volume-number').then($el => expect($el).to.have.value(33));
  });

  it('Audio volume changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val',33).trigger('input');
    cy.get('#horn-sound').then($el => expect($el).to.have.prop('volume',0.33));
  });

  it('Horn image changes when party horn radio selected', () => {
    cy.get('#radio-car-horn').trigger('change');
    cy.get('#sound-image').then($el => expect($el).to.have.prop('src','http://127.0.0.1:5500/assets/media/images/car.svg'));
  });

  it('Horn sound changes when party horn radio selected', () => {
    cy.get('#radio-party-horn').trigger('change');
    cy.get('#horn-sound').then($el => expect($el).to.have.prop('src','http://127.0.0.1:5500/assets/media/audio/party-horn.mp3'));
  });

  it('Volume icon changes when volume input changes to 33', () => {
    cy.get('#volume-number').invoke('val',33).trigger('input');
    cy.get('#volume-image').then($el => expect($el).to.have.prop('src', 'http://127.0.0.1:5500/assets/media/icons/volume-level-1.svg'));
  });

  it('Volume icon changes when volume input changes to 66', () => {
    cy.get('#volume-number').invoke('val',66).trigger('input');
    cy.get('#volume-image').then($el => expect($el).to.have.prop('src', 'http://127.0.0.1:5500/assets/media/icons/volume-level-2.svg'));
  });

  it('Volume icon changes when volume input changes 100', () => {
    cy.get('#volume-number').invoke('val',100).trigger('input');
    cy.get('#volume-image').then($el => expect($el).to.have.prop('src', 'http://127.0.0.1:5500/assets/media/icons/volume-level-3.svg'));
  });

  it('Honk button disabled when input is empty', () => {
    cy.get('#volume-number').invoke('val','').trigger('input');
    cy.get('#honk-btn').then($el => expect($el).to.have.prop('disabled', true));
  });
  
  it('Honk button disabled when input is 0', () => {
    cy.get('#volume-number').invoke('val',0).trigger('input');
    cy.get('#honk-btn').then($el => expect($el).to.have.prop('disabled', true));
  });

  it('Error when number outside given range', () => {
    cy.get('#volume-number').invoke('val',101).trigger('input');
    cy.get('#honk-btn').trigger('submit');
    cy.get(':invalid').then($el => expect($el).to.have.value(''));
  });

});