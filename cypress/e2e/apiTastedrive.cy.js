/// <reference types="cypress" />

describe("Api tasteDrive", () => {
	it("GET ", () => {
		cy.request({
			url: `https://tastedive.com/api/similar?q=olivier`,
		});
	});

	it("test fixture ", () => {
		cy.fixture("data").then(fixt => {
			cy.request({
				url: `https://tastedive.com/api/similar?q=${fixt.name}`,
			});
			cy.request({
				url: `https://tastedive.com/api/similar?q=${fixt.movie}`,
			});
		});
	});

	it("lecture fichier json", () => {
		cy.parametre("Olivier").then(response => {
			cy.log(JSON.stringify(response));
		});
	});
});
