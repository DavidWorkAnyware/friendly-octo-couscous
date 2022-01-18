describe("Main navigation", () => {
    beforeEach(() => {
        cy.request({
            method: "POST",
            url: "/products/process.php",
            body: {
                user: "snicholson@workanyware.co.uk",
                pass: "123",
                sublogin: 1,
                remember: 1
            },
            headers: {
                referer: "localhost"
            },
            form: true
        })
    })

    it.skip("Displays Timesheets link in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("Timesheets");
    })

    it("Displays Reports link in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("Reports");
    })

    it("Links to Reports in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("Reports").then(($link) => {
            const url = Cypress.$($link).attr('href');
            cy.visit(url);
            cy.get("#page-title h1").contains("Reports Menu")
            cy.contains("Report Generator")
        })
    })

    it("Displays Address Book link in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("Address Book");
    })

    it("Links to Address Book in main menu", () => {
        cy.get(".top-menu").contains("Address Book").then(($link) => {
            const url = Cypress.$($link).attr('href');
            cy.visit(url);
            cy.get("#page-title h1").contains("Address Book")
        })
    })

    it("Displays Finance link in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("Finance")
    })

    it("Links to Finance in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("Finance").then(($link) => {
            const url = Cypress.$($link).attr('href');
            cy.visit(url);
            cy.get("#page-title h1").contains("Finance Menu")
        });
    })

    it("Displays Invoices link in Finance menu", () => {
        cy.visit("/products/equinox/finance")
        cy.get(".portlet-content").contains("Invoices");
    })

    it("Displays System link in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("System");
    })

    it("Links to System in main menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-menu").contains("System").then(($link) => {
            const url = Cypress.$($link).attr('href');
            cy.visit(url);
            cy.get("#page-title h1").contains("System Menu")
        });
    })

    it("Shows Create Matter icon", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-right-menu").within(() => {
            cy.get(".icon-folder-open")
        })
    })


    it("Shows Create Matter quick menu", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-right-menu .toggle-quick-new-matter").click()
        cy.get(".quick-new-matter-container").contains("Create new Matter")
    })

    it("Shows Outstanding Tasks icon", () => {
        cy.visit("/products/equinox/matters")
        cy.get(".top-right-menu").within(() => {
            cy.get(".icon-calendar")
        })
    })
})