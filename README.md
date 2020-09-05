# Web Storage Example - Almost Amazon
[![Netlify Status](https://api.netlify.com/api/v1/badges/7c25c6b9-19eb-4e96-b201-7ac5a2aa6b81/deploy-status)](https://app.netlify.com/sites/almost-amazon-webpack/deploys)

[Test it live](https://almost-amazon-webpack.netlify.app/)
- Users
  - Login as one of the following users using email and password
  
  ```javascript
  const users = [
    {
      id: 1,
      email: 'test1@test.com',
      name: 'Test User 1',
      password: '1234'
    },
    {
      id: 2,
      email: 'test2@test.com',
      name: 'Test User 2',
      password: '1234'
    },
    {
      id: 3,
      email: 'test3@test.com',
      name: 'Test User 3',
      password: '1234'
    }
  ];
  ```
   - Add some stuff to the cart and log out
   - Log in as another user and add some stuff to the cart and log out
   - Log back in as the first user, the cart should still be all there!
   - Complete the checkout process, and log out
   - Go back to the second user, see the cart is still there!

- When you add items to the cart, refresh your browser window and notice the data persists
- Open your inspector tools and navigate to `Application`, click on `localStorage`, select the `https://almost-amazon-webpack.netlify.app/` url.
  - note the data in `cart`
  - add more items to the cart
  - finish the checkout and watch the localStorage empty
  
## Agenda
- Add Cart to localStorage
- (If time) add users and user carts

## Types of Web Storage
- sessionStorage: storage persists during the user session. Once the tab or window is closed, the data is deleted. 
- localStorage: storage does not have any expiration and can last through multiple sessions in the same browser. 

## Using localStorage
To use localStorage in your web applications, there are five methods to choose from:
- `setItem()`: Add key and value to localStorage
- `getItem()`: Retrieve a value by the key from localStorage
- `removeItem()`: Remove an item by key from localStorage
- `clear()`: Clear all localStorage
- `key()`: Passed a number to retrieve nth key of a localStorage

## localStorage Rules:
- localStorage cannot be shared across machines or browsers. 
- Do not store sensitive user information in localStorage
- localStorage is not a substitute for a server based database
- localStorage information is only stored on the browser
- localStorage is limited to 5MB across all major browsers
- localStorage is insecure as it has no form of data protection and can be accessed by any code on your web page
