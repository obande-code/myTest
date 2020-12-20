Here is a little documentation of what this app does.

This is just a replica of an aspect of the MTN website. The search bar allows you to search for photos, using the Unsplash API, on searching for a photo an alert pops showing the site is functional and you can retrieve the data in the console.

After careful analysis of the design given to me to implement, I concluded to create components for the design to allow me to easily implement what I want.

I went ahead to create the react boilerplate with npx create-react-app, I went ahead to clean up the react app before starting the project

I then created the different component folders that I would be needing and also imported all needed images and colors style for the task at hand.

All dependencies and CDN were installed and imported

I went ahead to work on the components I have at hand starting from the Navbar, Main content, and the footer

I created the search input field as a component on its own and used it in the navbar, to allow me to consume the Unsplash API. 

To consume the Unsplash API I created an account to have an access key which will enable me to query the photos on their website.

I used the react hooks for the consumption of the API because it gives me a short and concise code to work with. useState was used to declare and code the empty array. Hooks allow for short and clean code.

The result of the search query is found in the console and shows a pop-up alert indicating a functional query API.

