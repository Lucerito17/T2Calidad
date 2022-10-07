import{slowCypressDown}from 'cypress-slow-down'
//libreria para que se vea con un delay de 1 segundo

slowCypressDown()//parte de la librería

describe('T2Evaluación', ()=>{//realice el agregado de id al código inicial
    it('IniciarSesión', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
    })

    it('AgregarLibroaBliliotecaPiedraFilosofal', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#2').click();
    })

    it('AgregarLibroaBliliotecaCámaraSecreta', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#4').click();
    })

    it('AgregarLibroaBliliotecaPrisioneroAzkaban', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#5').click();
    })

    it('AgregarLibroaBliliotecaCalisFuego', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#6').click();
    })

    it('AgregarLibroaBliliotecaOrdenFenix', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#7').click();
    })

    it('AgregarLibroaBliliotecaMisterio', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#8').click();
    })

    it('AgregarLibroaBliliotecaReliquiasMuerte', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#9').click();
    })

    it('AgregarLibroaBliliotecaLegado', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#10').click();
    })
   
    it('VerBiblioteca', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#mi-biblioteca').click();
    })

    it('SeleccionarLibro', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#HarryPotterylapiedrafilosofal').click();
    })

    it('RealizarComentarioYPuntajePiedraFilosofal', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#HarryPotterylapiedrafilosofal').click();
        cy.get('.form-control').type('Mas o menos');
        cy.get('#puntos').type('3');
        cy.get('.btn-primary').click();
    })

    it('RealizarComentarioYPuntajeCamaraSecreta', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#HarryPotterylacámarasecreta').click();
        cy.get('.form-control').type('Buen Libro');
        cy.get('#puntos').type('4');
        cy.get('.btn-primary').click();
    })

    it('SeleccionarLibroComoLeyendo', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#mi-biblioteca').click();
        cy.get('#5').click();
    })

    it('SeleccionarLibroComoTerminado', ()=>{
        cy.visit(Cypress.env("base_url"));
        cy.get('#mi-biblioteca').click();
        cy.get('#us').type('Admin');
        cy.get('#ps').type('Admin');
        cy.get('.btn-primary').click();
        cy.get('#mi-biblioteca').click();
        cy.get('#72').click();
    })

});