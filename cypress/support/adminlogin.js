export function adminLogin(username, password) {
    
    cy.visit("https://pet-shop.buckhill.com.hr/");
    cy.get("button[class='v-btn v-theme--PetGreen text-white v-btn--density-default v-btn--size-default v-btn--variant-outlined ml-6']").click();
    cy.get (".mb-3.v-input.v-input--density-default.v-input--horizontal.v-text-field > .v-input__control > div[role='textbox']  .v-field__input").type(username);
    cy.get("[class] .v-text-field:nth-of-type(3) .v-field__input").type(password);
    cy.intercept({
        path: "/api/v1/user/login"
      }).as("login");
      
      cy.get("button[class='v-btn v-btn--elevated v-theme--PetGreen bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated text-white']").click()
  }