
import {visitBuckhillURL} from "../support/visitBuckhillURL";
describe("displayed images verification",()=>{
    it("Confirming images displayed in placing orders life cycle",()=>{
      visitBuckhillURL();
    
     //scrolling  past image to allow lazy load elements to load
     cy.get('p.product-card__title[data-v-f757f4f9]:contains("Shout for Pets Odor and Urine Eliminator - Effective Way to Remove Puppy & Dog Odors and Stains from Carpets & Rugs")')
     .scrollIntoView({duration: 2000})
     //adding an intercept to be used to confirm if the correct product image will be displayed
     cy.intercept({
      path: "/api/v1/product/f96c9b6c-3e10-3187-8f49-0dd136e3fe87"
    }).as("verifyDisplayedImage");
     // scroll to view product image them clicking on it
     cy.get('.v-slide-group__content > div:nth-of-type(1) > .v-img.v-responsive > img')
     .scrollIntoView() . click();
     // intercepting response to assert that the correct image is displayed
     cy.wait("@verifyDisplayedImage").then(intercept =>{
      expect(intercept.response.body.data.metadata.image).to.equal("d21bcce8-8527-395b-9551-fa402d6b727c");
   })
  
   
    
     //Click add to cart
    cy.get('button.v-btn.v-btn--elevated.v-theme--PetGreen.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.text-white[data-v-4e0ece86]')
    .click();
    cy.scrollTo("top")
    
    cy.get('.product img').scrollIntoView();
    cy.get('[color] .v-btn--variant-outlined:nth-of-type(1) .v-btn__content').click()
 
   
    cy.get('span:nth-of-type(2) > .mdi.mdi-plus.notranslate.v-icon.v-icon--size-default.v-theme--PetGreen')
    
    cy.get('.mt-6.primary500.text-white.v-btn.v-btn--density-default.v-btn--elevated.v-btn--size-default.v-btn--variant-elevated.v-theme--PetGreen.w-100')
    .click()
    

    cy.get('div:nth-of-type(3) > .ml-2.step__text').click()
    cy.get('.mt-10.order-summary > .align-center.d-flex.grey50.justify-space-between.px-4 > .text-h6').scrollIntoView();
    //Checking if the image displayed has the same source as the image clicked on
    cy.get('.review-order.v-window-item img') 
  .should('have.attr', 'src', 'https://pet-shop.buckhill.com.hr/api/v1/file/d21bcce8-8527-395b-9551-fa402d6b727c');

    
    })
  })
  