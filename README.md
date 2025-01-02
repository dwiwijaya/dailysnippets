# Daily Snippets

Daily Snippets is a web application that serves a variety of daily content, including quotes, jokes, trivia, and more. It uses the [API Ninjas](https://api.api-ninjas.com) API to fetch content dynamically.

## Features

- Displays daily snippets such as quotes, facts, jokes, trivias and riddles.
- Fetches content using API from API Ninjas.
- Built with Next.js for fast performance and dynamic rendering.

## Technologies Used

- **Next.js**: A React framework for building static and dynamic websites.
- **Axios**: For making HTTP requests.
- **React Query**: For managing server state and fetching data.
- **Next Themes**: To support dark and light modes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dwiwijaya/daily-snippets.git
   ```

2. Install dependencies:
   ```bash
   cd daily-snippets
   npm install
   ```
4. Create a .env.local file in the root of the project and add the following variable:
   ```env
   NEXT_PUBLIC_NINJA_API_KEY=your-api-key
   ```
3. Run the application:
   ```bash
   npm run dev
   ```

4. Visit the app at `http://localhost:3000`.

## Usage

- The application will display a new snippet each day, fetched from the API.
- It includes quotes, jokes, trivia, and other fun facts.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add feature'`).
4. Push to your branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
