describe("test auth", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/signin");
  });
  it("should pass wrong user credentials (email) and get error", () => {
    cy.get("input").first().type("user");
    cy.get("button").last().click();
    cy.get("p").first().should("have.text", "Invalid email");
  });

  it("should pass wrong user credentials (password) and get error", () => {
    cy.get("input").first().type("user@user.com");
    cy.get("input").eq(1).type("1");
    cy.get("button").last().click();
    cy.get("p").first().should("have.text", "Too short!");
  });

  it("should pass wrong user credentials (user doesnt exist) and get error", () => {
    cy.get("input").first().type("user@user.com");
    cy.get("input").eq(1).type("useruser");
    cy.get("button").first().click();
    cy.get("p").first().should("have.text", "User doesn't exist.");
  });

  it("should pass correct user credentials and be navigated to /dashboard", () => {
    cy.get("input").first().type("admin@admin.com");
    cy.get("input").eq(1).type("admin");
    cy.get("button").first().click();
    cy.url().should("equal", "http://localhost:3000/dashboard");
  });

  it("should move back to start if the user is not detected", () => {
    cy.visit("http://localhost:3000/dashboard");
    cy.get("button").first().click();
    cy.get("button").eq(1).click();
    cy.url().should("equal", "http://localhost:3000/");
  });
});
