import {visitBuckhillURL} from "../support/visitBuckhillURL";
import {searchForProduct} from "../support/searchingForProductsOnHomePage";

describe('searching for an item', () => {
  it('item unavailable/not on sale', () => {
    visitBuckhillURL();
    // adding an intercept to check number of returned items
cy.intercept({
  path: "/api/v1/products?title=buckhill"
}).as("returnedItems");
searchForProduct("buckhill{enter}");
cy.scrollTo("top")

cy.wait("@returnedItems").then(intercept =>{
  console.log(intercept.response.body.data[0])
  //Adding an assertion to check if no item is returned.
  expect(intercept.response.body.data[0]).to.equal(undefined)
  
})
  })
})




//<input size="1" type="text" id="input-63" aria-describedby="input-63-messages" class="v-field__input">flex