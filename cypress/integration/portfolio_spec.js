let fetchPolyfill;

before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';

    cy.request(polyfillUrl)
    .then((response) => {
        fetchPolyfill = response.body;
    });

    cy.visit('http://127.0.0.1:5500', {
        onBeforeLoad(contentWindow) {
            delete contentWindow.fetch;
            contentWindow.eval(fetchPolyfill);
            contentWindow.fetch = contentWindow.unfetch;
        },
    });
});

describe ('Verificar efectos iniciales al hacer scroll', () => {
    it ('Verificar efecto inicial de .logos', () => {
        cy.get('.tecnologias').children().should('have.attr','data-aos')
    });
    it ('Verificar efecto de #contenedo-proyectos', ()=>{
        cy.get('#contenedor-proyectos').should('have.attr','data-aos')
    });
    it ('Verificar efecto de #mega-contenedor-sobre-mi', ()=>{
        cy.get('#mega-contenedor-sobre-mi').should('have.attr','data-aos')
    });
    it ('Verificar efecto de .contenedor-mi-foto', ()=>{
        cy.get('.contenedor-mi-foto').should('have.attr','data-aos')
    });
    it ('Verificar efecto de .formas-de-contacto', ()=>{
        cy.get('.formas-de-contacto').should('have.attr','data-aos')
    });

});



describe ('Verificar funcionamiento de los botones',() => {
    it('Verificar funcionamiento de .opciones-nav',()=>{
        cy.get('.opciones-nav').each($el =>{
            cy.wrap($el)
            .click()
            .should('have.attr','href')
        })
       }) 

    it('Verificar funcionamiento de .boton-descargar-cv',() =>{
        cy.get('.boton-descargar-cv')
            .click()
            .should('have.attr','href')
            .and('equal','./src/CVDavidOlivera.pdf');
    });

    it('Verificar funcionamiento en botones de repositorio',() =>{

        cy.get('.boton-proyecto-repositorio').each($el => {
            cy.wrap($el)
            .should('have.attr','href')
            .and('include','https://github.com/DvdOlivera/')
        })
    });

    it('Verificar funcionamiento en botones de Demo',() =>{
        cy.get('.boton-proyecto-demo').each($el => {
            cy.wrap($el)
            .should('have.attr','href')
            .and('include','https://dvdolivera.github.io/')
        })
    });

   
  
})

describe('Verificar funcionamiento de links',()=>{
    it('Verificar funcionamiento de link  a linkedIn',()=>{
        cy.get('.linkedin')
        .should('have.attr','href')
        .and('equal','https://www.linkedin.com/in/david-olivera-3585a2204/');
    });

    it('Verificar funcionamiento de link a twitter',()=>{
        cy.get('.twitter')
        .should('have.attr','href')
        .and('equal','https://twitter.com/dvdolivera_dev');
    });

    it('Verificar funcionamiento de link a r/argentinaprograma',()=>{
        cy.get('.curso-sodano')
        .should('have.attr','href')
        .and('equal','https://argentinaprograma.com/');
    });

    it('Verificar funcionamiento de link a curso fullstack mircha',()=>{
        cy.get('.curso-mircha')
        .should('have.attr','href')
        .and('equal','https://aprendejavascript.org/');
    })
    
})







