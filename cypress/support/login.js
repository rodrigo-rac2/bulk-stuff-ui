// logs in via API in the Oauth2 service and stores the token in the session storage
// authentication method: authorization code, clientid: postman, secret: secret
// scope: scope, authentication Basic Auth header
// Auth URl: https://dev-connect-identity-server.kehe.com/connect/authorize
// Access Token URL https://dev-connect-identity-server.kehe.com/connect/token
// Client ID: postman
// Client Secret: secret
// Scope: scope
// Grant Type: Authorization Code
// Callback URL: https://www.getpostman.com/oauth2/callback
// State: state
// Access Token Path: access_token
// Access Token sent Via: Header
// Client Authentication: Send as Basic Auth header
// Client Authentication Header: Basic Auth
Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'https://dev-connect-identity-server.kehe.com/connect/token',
        body: {
            grant_type: 'authorization_code',
            client_id: 'postman',
            client_secret: 'secret',
            callback_url: 'https://www.getpostman.com/oauth2/callback',
            scope: 'sales-order-api',
            auth_url: 'https://dev-connect-identity-server.kehe.com/connect/authorize',
            access_token_url: 'https://dev-connect-identity-server.kehe.com/connect/token',
        }
    }).then((response) => {
        window.sessionStorage.setItem('access_token', response.body.access_token)
    })
})
