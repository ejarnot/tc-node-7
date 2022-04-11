# React Routing

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: git clone <repo_name>
  cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the README.md file to complete exercises
- Open the app.js file to get started

## Exercise

- We will be using the Studio Ghibli API to make calls, and display data in our application, depending on our current url route.
- [Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)
- We'll be fetching from the /films and /people endpoints for this exercise

1. Configure React Router in your application. Use the same structure as the walkthrough during the lecture. Just make sure that it works!

- Reminder `BrowserRouter`:

```
  <BrowserRouter>
    <Switch>
      <Route>
        <Component />
      </Route>
    </Switch>
  </BrowserRouter>
```

- is the starting point

2. Create a `Navbar` component. Import and then render the component in the `App` component (not inside the `Switch`)

3. Next, you should create three `Links` that point to a specific `Route` url. One for `Home`, another for `Films`, and a third for `People`

4. Start configuring your first route.

- Say, for /films. After navigating to localhost:3000/films, you should see Studio Ghibli's list of films.
- The data should only be loaded and displayed when you navigate to /films. You should use componentDidMount() and fetch to make this request.
- You will use`"https://ghibliapi.herokuapp.com/films"` for the api endpoint
- Construct a fetch request with `.then` and `.catch`. Remember to:
  - Fetch the data
  - If a response was resolved, parse the JSON object
  - Then set the response to the state of your `Films` component
  - In your render method, be sure to map through the `films` state and display the results to the browser

5. Configure your second route. Repeat the steps from the `/films` route, but for `/people`. Use `"https://ghibliapi.herokuapp.com/people"`.

- At the end of these tasks, you should have at least three pages in your application, and you should be able to navigate to them simply by clicking a link.

## Bonus

- Create two more routes for `/places` and `/vehicles`.
