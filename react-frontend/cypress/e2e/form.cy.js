describe("The Add User Form", () => {
  it("lets us add a user", () => {
    const testdata = {
      name: "BJ Klingenberg",
      job: "Professor",
    };

    cy.visit("http://localhost:3000/");
    cy.get('input[name="name"]').type(testdata.name);
    cy.get('input[name="job"]').type(testdata.job);
    cy.get('input[value="Submit"]').click();

    cy.get("tbody > tr:last-child > td:first-of-type").should(
      "contain",
      testdata.name + "d"
    );
  });
});
