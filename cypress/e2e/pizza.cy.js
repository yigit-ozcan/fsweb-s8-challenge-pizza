describe("Pizza Sipariş Formu Testleri", () => {

  it("Not alanına metin girilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get("textarea")
      .type("Bu bir nottur")
      .should("have.value", "Bu bir nottur");
  });

  it("Birden fazla malzeme seçilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });
    cy.get('input[type="checkbox"]').eq(3).check({ force: true });

    cy.get('input[type="checkbox"]').eq(0).should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).should("be.checked");
    cy.get('input[type="checkbox"]').eq(2).should("be.checked");
    cy.get('input[type="checkbox"]').eq(3).should("be.checked");
  });

  it("Form başarıyla gönderilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[placeholder="İsminizi girin"]').type("Yiğit");
    cy.get("textarea").type("Test notu");

    cy.get('input[value="Orta"]').check({ force: true });
    cy.get("select").select("orta");

    cy.get('input[type="checkbox"]').eq(0).check({ force: true });
    cy.get('input[type="checkbox"]').eq(1).check({ force: true });
    cy.get('input[type="checkbox"]').eq(2).check({ force: true });
    cy.get('input[type="checkbox"]').eq(3).check({ force: true });

    cy.contains("+").click();

    cy.get('button[type="submit"]').click();
  });

  it("Pizza boyutu seçilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[value="Orta"]').check({ force: true }).should("be.checked");
  });

  it("Hamur seçimi yapılabilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get("select").select("ince").should("have.value", "ince");
  });

  it("Form gönderildiğinde success sayfasına gidilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[placeholder="İsminizi girin"]').type("Yiğit");

    cy.get('input[value="Orta"]').check({ force: true });
    cy.get("select").select("orta");

    for (let i = 0; i < 4; i++) {
      cy.get('input[type="checkbox"]').eq(i).check({ force: true });
    }

    cy.contains("+").click();

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/success");
  });

});
