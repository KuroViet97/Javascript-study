<!-- @format -->

# To secure private apis:

- Create 1 endpoint to register user (name, email, password)

      1. Simple validations
      2. Encrypt password using bcrypt (hasing with additional salt)
      3. Store hashed password
      4. Generate jwt token
      5. Send jwt token back with newly created user

- Create 1 endpoint to authenticate (email, password)

      1. Simple validation for email, password
      2. Compare password
      3. If matched, generate jwt token and send back to user

- Create middleware for authentication

      1. After receiving jwt from /auth or /users, token is sent back to server in the request
      2. Check if jwt token is valid
      3. If the token is valid, proceed the request with next();

- Secure the endpoints

      1. Add the middleware above to the endpoint to secure the api

- Create 1 endpoint to check which user is belonged to the token

      1. Users are not stored anywhere in the backend logic
      2. JWT is stateless. The server only receives token, compares and send back data to client
      3. Call the GET auth/user api with JWT token to return the corresponding user
