describe("Login Test", () => {
    beforeEach(() => {
        cy.visit("/login.php?timeout&uri=%2Fproducts%2Fequinox%2Fmatters%2Findex.php")
    })

    it("Displays login page", () => {
        cy.get(".loginform")
    })

    it("Shows login page when invalid login details entered", () => {
        cy.get('[type="email"]').type("test@example.com")
        cy.get('[type="email"]').should("have.value", "test@example.com")

        cy.get('.loginform').submit()
        cy.url().should("contains", "login.php")
    })

    it("Shows main menu on successful login", () => {
        cy.get('[type="email"]').type("snicholson@workanyware.co.uk")
        cy.get('[type="password"]').type("123")

        cy.get('.loginform').submit()
        cy.url().should("contains", "/products/equinox/matters")
    })
})
