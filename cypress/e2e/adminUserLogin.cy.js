import {adminLogin} from "../support/adminlogin";
describe("admin quser login",()=>{
  it("correct user name and password",()=>{
    adminLogin("admin@buckhill.co.uk","admin")
    cy.wait("@login").then(intercept =>{
      expect(intercept.response.statusCode).equal("200");
   })
    

    
  })
})