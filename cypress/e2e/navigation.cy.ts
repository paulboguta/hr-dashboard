describe("test navigation", () => {
  describe("nav buttons on the left should move to different pages", () => {
    it("nav (home) works", () => {
      cy.visit("http://localhost:3000/jobs");
      cy.get(".sc-bcXHqe > :nth-child(1)").click();
      cy.url().should("equal", "http://localhost:3000/dashboard");
    });
    it("nav (jobs) works", () => {
      cy.get(".sc-bcXHqe > :nth-child(2)").click();
      cy.url().should("equal", "http://localhost:3000/jobs");
    });
    it("nav (candidates) works", () => {
      cy.get(".sc-bcXHqe > :nth-child(3)").click();
      cy.url().should("equal", "http://localhost:3000/candidates");
    });
    it("nav (calendar) works", () => {
      cy.get(".sc-bcXHqe > :nth-child(4)").click();
      cy.url().should("equal", "http://localhost:3000/calendar");
    });
  });
  describe("nav buttons (profile menu) should move to profile or to start", () => {
    it("nav (profile) moves to profile when logged in", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get("input").first().type("admin@admin.com");
      cy.get("input").eq(1).type("admin");
      cy.get("button").first().click();
      cy.get(".sc-jrcTuL").click();
      cy.get(".sc-dkrFOg > :nth-child(2)").click();
      cy.url().should("equal", "http://localhost:3000/profile");
    });
    it("nav (logout) moves to starting page", () => {
      cy.visit("http://localhost:3000/signin");
      cy.get("input").first().type("admin@admin.com");
      cy.get("input").eq(1).type("admin");
      cy.get("button").first().click();
      cy.get(".sc-jrcTuL").click();
      cy.get(".sc-dkrFOg > :nth-child(3)").click();
      cy.url().should("equal", "http://localhost:3000/");
    });
  });
});
