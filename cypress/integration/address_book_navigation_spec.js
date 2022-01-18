describe("Address book navigation", () => {
    beforeEach(() => {
        cy.request({
            method: "POST",
            url: "/products/process.php",
            body: {
                user: "snicholson@workanyware.co.uk",
                pass: "123",
                sublogin: 1
            },
            headers: {
                referer: "localhost"
            },
            form: true
        })
    })

    it("Displays Client Associate and Other Side Contacts in Address Book Menu", () => {
        cy.visit("/products/equinox/addressbook")
        cy.get(".portlet-content").contains("Client, Associate and Other Side Contacts")
    })
})