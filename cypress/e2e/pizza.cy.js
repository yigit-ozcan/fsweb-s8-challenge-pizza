describe("Pizza Sipariş Formu Testleri", () => {

  it("İsme metin girilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[type="text"]')
      .type("Yiğit")
      .should("have.value", "Yiğit");
  });

  it("Birden fazla malzeme seçilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(2).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(3).check().should("be.checked");
  });

  it("Form başarıyla gönderilebilmeli", () => {
    cy.visit("http://localhost:5173/order");

    cy.get('input[type="text"]').type("Yiğit");

    cy.get('input[value="orta"]').check();

    cy.get("select").select("orta");

    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get('input[type="checkbox"]').eq(1).check();
    cy.get('input[type="checkbox"]').eq(2).check();
    cy.get('input[type="checkbox"]').eq(3).check();

    cy.get('input[type="number"]').clear().type("2");

    cy.get('button[type="submit"]').click();
  });

});
