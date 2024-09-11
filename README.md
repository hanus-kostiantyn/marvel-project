# Marvel Project

A Marvel application built with React. This app fetches Marvel characters and comics data from the Marvel API and displays it to the user.

## Features

Characters Page:

- Random Character Component: Generate a random Marvel character with an image, name, and description.
- Character List: View a list of Marvel characters with their images and names. Click on a character to see detailed information on the same page.
- Load More Characters: Load additional characters by clicking the "Load More" button.

Comics Page:

- Comics List: Displays a list of Marvel comics with images, names and prices.
- Comic Details: Click on a comic to redirect to a new page with detailed information including image, name, description, number of pages, comic language and price.
- Load More Comics: Load additional comics by clicking the "Load More" button.

## Tech Stack

- React
- HTML, CSS (SCSS), JS
- Marvel API
- React Router

## Installation

1. Clone the repository:
   git clone https://github.com/hanus-kostiantyn/marvel-project.git
2. Navigate to the project directory:
   cd marvel-project
3. Install the dependencies:
   npm install
4. Create a .env file in the root directory and add your Marvel API key:
   REACT_APP_MARVEL_API_KEY=your_api_key_here
5. Start the development server:
   npm start
6. Open your browser and go to http://localhost:3000 to see the app in action. 	
	
## Usage
- Characters Page: Use the random character generator to get a random Marvel character. Browse the list of characters and click on any character to view more details. Click the "Load More" button to load additional characters.
- Comics Page: Browse the list of comics and click on any comic to view detailed information about it. Click the "Load More" button to load additional characters.

## Contributing
If you want to contribute to this project, please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature/your-feature).
Create a new Pull Request.

## Contact
For any questions or inquiries, please contact hanus.kostiantyn@gmail.com
