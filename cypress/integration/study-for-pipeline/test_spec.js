context('visit blog', () => {
    beforeEach(() => {
        cy.viewport(1280, 800)
        cy.visit('https://blog.mutoe.com/')
    })


    it('visit blog', function() {
        cy.contains('Flutter 学习笔记').click()
    })
})
