export function  searchForProduct(productName){
cy.get("input#input-4.v-field__input[type='text'][size='1'][aria-describedby='input-4-messages']")

.then(($elements) => {
  if ($elements.length > 1) {
    // If there are multiple elements, click the last one
    cy.wrap($elements[$elements.length - 1]).click().type(productName);
  } else {
    // If there is only one element, click it
    cy.wrap($elements).click().type(productName);
  }

  })
}
//<input size="1" type="text" id="input-63" aria-describedby="input-63-messages" class="v-field__input">flex