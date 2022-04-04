//PLEASE DELETE ALL YOUR POSTS FROM BACKEND FOR THIS TO WORK PROPERLY

describe('testCreatingPost', () => {

    it('user can make a post', () => {

        //see if no post message is shown 
	    //create post, 
	    //find post on the page, and find each of the elements
        
        cy.visit('http://localhost:3000/login'); //login as testUser

        expect(cy.findByRole('heading', {  name: /login/i})).to.exist;
 
        cy.findByPlaceholderText(/example@gmail.com/i).type('testUser@example.com')
        cy.findByPlaceholderText(/password/i).type('testUser')
        cy.findByRole('button', {  name: /log in/i}).click();
        cy.wait(1000)
 
        cy.findByText('Profile').scrollIntoView().should('be.visible');
        cy.findByText('Profile').scrollIntoView().click();
        cy.wait(2000);
        cy.findByRole('heading', {  name: /testuser/i}).should('be.visible'); //logged in as testUser

        //see if no post message is shown 
        cy.findByText(/no new posts!/i).scrollIntoView().should('be.visible');

        //create post
        cy.findByRole('button', {  name: /create a new post/i}).should('be.visible');
        cy.findByRole('button', {  name: /create a new post/i}).click();

            //if text fields are available
            cy.findByPlaceholderText(/give it a title!/i).should('be.visible');
             cy.findByPlaceholderText(/what is this post about?/i).should('be.visible');
             cy.findByPlaceholderText(/what's in your mind?/i).should('be.visible');
             cy.findByPlaceholderText(/add tags!/i).should('be.visible');
            
            const postTitle = 'post 1 title';
             const postDescription = 'post 1 description'
             const postContent = 'post 1 content'
             const postTags = 'post1, post1, post1'
             cy.findByPlaceholderText(/give it a title!/i).type(postTitle);
             cy.findByPlaceholderText(/what is this post about?/i).type(postDescription);
             cy.findByPlaceholderText(/what's in your mind?/i).type(postContent);
             cy.findByPlaceholderText(/add tags!/i).type(postTags);
             cy.findByText(/private/i).click();
 
             cy.findByRole('button', { name: "Post"}).click();
             //cy.findByRole('button', { name: /close/i}).click();
             cy.wait(1000);
             cy.reload();
 
            //find post on the page, and find each of the elements
            
            cy.findByText(/post 1 title/i).scrollIntoView().should('be.visible');
            cy.findByText(/post 1 description/i).scrollIntoView().should('be.visible');
            cy.findByText(/post 1 content/i).scrollIntoView().should('be.visible');
            cy.findByText(/#post1, post1, post1/i).scrollIntoView().should('be.visible');

    })
})