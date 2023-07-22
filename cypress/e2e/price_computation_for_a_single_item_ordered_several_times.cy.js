import {visitBuckhillURL} from "../support/visitBuckhillURL";
describe("adding items to cart",()=>{
  it("total price computation for a single item added multiple times ",()=>{
  
    visitBuckhillURL()
  
   //scrolling  past image to allow lazy load elements to load
  cy.get('p.product-card__title[data-v-f757f4f9]:contains("Shout for Pets Odor and Urine Eliminator - Effective Way to Remove Puppy & Dog Odors and Stains from Carpets & Rugs")')
   .scrollIntoView({duration: 2000})
   // scroll to view product image them clicking on it
  cy.get('.v-slide-group__content > div:nth-of-type(1) > .v-img.v-responsive > img')
   .scrollIntoView({duration: 2000}) . click();
 
   //Click add to cart
  cy.get('button.v-btn.v-btn--elevated.v-theme--PetGreen.bg-primary.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.text-white[data-v-4e0ece86]')
  .click();

  cy.get('img.v-img__img.v-img__img--contain[src="https://pet-shop.buckhill.com.hr/api/v1/file/0c6999ed-4b46-3f0f-ba7d-005383959323"]').scrollIntoView({duration: 2000});
  cy.get('[color] .v-btn--variant-outlined:nth-of-type(1) .v-btn__content').click()
  cy.get('[color] .v-btn--variant-outlined:nth-of-type(1) .v-btn__content').click()
  //increasing product count from the cart window
for(var i=0;i<5;i++){
  cy.wait(1000)
  cy.get('span:nth-of-type(2) > .mdi.mdi-plus.notranslate.v-icon.v-icon--size-default.v-theme--PetGreen')
     .click()
     
    }
  cy.get('.mt-6.primary500.text-white.v-btn.v-btn--density-default.v-btn--elevated.v-btn--size-default.v-btn--variant-elevated.v-theme--PetGreen.w-100')
  .click()
  cy.get('div:nth-of-type(3) > .ml-2.step__text').click()
  cy.get('.mt-10.order-summary > .align-center.d-flex.grey50.justify-space-between.px-4 > .text-h6').scrollIntoView();
  //Asserting if the total price computation is correct
  cy.get('[class] .payment-detail:nth-child(3) p:nth-of-type(2)').invoke("text").should("eq","248.75 kn")
  })
})
