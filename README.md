# abn-assignment

You will use an open TV shows API http://www.tvmaze.com/api to create an application that allows users
to view a few lists (preferably horizontal list) of TV shows based on different genres (drama, comedy,
sports, etc.).
Your goal is to display a few popular TV shows based on their rating and genre on a dashboard and when
the user clicks on a TV show then the details of that TV show should be displayed on another screen. Also,
the user should be able to search for a TV show to get the details. You can design your own UI which fits
this requirement.

## Architectural decisions

Framework and Libraries Used

- **Vue.js**: Chosen for its simplicity and efficiency in building interactive UIs. Vue CLI was used to set up the environment, providing a solid foundation with minimal configuration.
- **TypeScript**: Ensures type safety and enhances code quality and maintainability.
- **Bootstrap**: Used for styling the application, taking advantage of its component library and responsive design utilities.
- **Pinia**: Manages the application's state, allowing for centralized state management and easy integration with Vue components.
- **Axios**: Facilitates HTTP requests to fetch data from the API. A centralized Axios instance was configured (axios.ts) for consistent API calls throughout the application.
- **Sass**: Enhances CSS with features like variables, nested rules, and mixins for more maintainable stylesheets.
- **Vitest with Vue Test Utils**: Provides a powerful and efficient testing solution, ensuring components and business logic function as expected.

## Development process

1. **Initial Planning**: Determined the application's requirements and functionality. Sketching and component breakdown were essential early steps to visualize the structure.
2. **Set up Base App**: Configured the base application using Vue, TypeScript, Bootstrap, and Axios with a clear folder structure for components, services, and utilities.
3. **Axios Setup**: A centralized Axios configuration (axios.ts) for consistent API interactions, including setting a base URL and default headers.
4. **API Service Abstraction**: Abstracted API calls into service functions within the services folder (e.g., tvShowServices.ts), allowing for clean and reusable interactions with the API.
5. **State Management and Direct Store Manipulation**: Implemented Pinia for centralized state management, focusing on a reactive state approach. Directly manipulated the store's searchQuery from components to streamline state updates across the application, enhancing reactivity and simplifying data handling.
6. **Data Handling and Display**: Fetched and displayed a list of TV shows from the API, categorizing them by genre. Filtered shows based on ratings, displaying only those with ratings above 7, and sorted these filtered lists from highest to lowest rating for display.
7. **Detailed Show Page**: Developed detailed views for individual TV shows, allowing users to view more comprehensive information. Ensured that users could navigate back to the overview without re-fetching data if it already exists in the store.
8. **Search Functionality**: Built a feature allowing users to search for TV shows based on name and genre.
9. **Accessibility Considerations**: Enhancing component accessibility by ensuring semantic HTML, managing focus states appropriately, and implementing ARIA roles and properties to support a broader range of users.
10. **Unit Testing**: Utilized Vitest and Vue Test Utils to write unit tests, first time using unit tests.

## Code Organization

A brief overview of the key directories and files in this project:

- `/src/assets`: Holds SCSS files and static assets like icons and images.
- `/src/components`: Contains reusable Vue components for the application.
- `/src/components/__tests__`: Unit tests for Vue components and utilities.
- `/src/router`: Configures the Vue Router for application navigation.
- `/src/services`: API calls and HTTP request handling.
- `/src/store`: Manages application state with Pinia stores.
- `/src/types`: Defines TypeScript types and interfaces for the project.
- `/src/views`: Represents full page components tied to routes.

## Unit testing

This assignment marked my first experience with unit testing, where time constraints limited the extent of my exploration. Despite this, the experience has sparked my interest in making testing a fundamental part of my development workflow. While, unfortunately, only a fraction of the application was covered by tests, I recognize the significant benefits unit testing brings to code quality. I'm enthusiastic about furthering my understanding and practice of testing techniques in future work.

## Requirements

- Ensure Node.js is installed on your machine. This project was developed with Node.js version 21.7.1.
- NPM comes with Node.js. This project uses npm version 10.5.0 for dependency management.

## Running the application

Install dependencies

```sh
npm install
```

Compile and Hot-Reload for Development

```sh
npm run dev
```

Type-Check, Compile and Minify for Production

```sh
npm run build
```

Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
