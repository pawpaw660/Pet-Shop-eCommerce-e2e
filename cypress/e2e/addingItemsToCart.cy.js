import {visitBuckhillURL} from "../support/visitBuckhillURL";
import {searchForProduct} from "../support/searchingForProductsOnHomePage";
describe("adding items to cart",()=>{
  it("one item added multiple times ",()=>{
   
    visitBuckhillURL()
    searchForProduct ("dog food{enter}")
    
  

   cy.get('span.text-capitalize:contains("Purina Beneful Wet Dog Food Variety Pack")').click();
      //add a single item multiple times
for (var i = 0;i<4;i++){
   cy.get('span:nth-of-type(2) > .mdi.mdi-plus.notranslate.v-icon.v-icon--size-default.v-theme--PetGreen').click();
   cy.wait(1000)
}
   cy.get ('.bg-primary.text-white.v-btn.v-btn--density-default.v-btn--elevated.v-btn--size-default.v-btn--variant-elevated.v-theme--PetGreen > .v-btn__content').click();
    
      
 


  cy.get('[color] .v-btn--variant-outlined:nth-of-type(1) .v-btn__content').contains("Cart (1)")
  

})
})
