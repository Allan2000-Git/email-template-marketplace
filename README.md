# Email Template Marketplace

Welcome to the Email Template Marketplace repository! This web app allows you to browse and explore a variety of email templates across different categories. You can filter, sort, and search for templates based on your preferences.

## Features

- Browse templates across different categories.
- Filter templates by category.
- Sort templates by various criteria.
- Search for specific templates.
- Responsive design for different screen sizes.
- Animations and transitions for a visually appealing experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. If not, you can download it [here](https://nodejs.org/).

## Getting Started

To get the app up and running, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Allan2000-Git/email-template-marketplace.git
   
2. Run the following command on the terminal:

   ```bash
   cd email-template-marketplace

3. Run the following command to get node_modules folder in your project:

   ```bash
   npm install

4. Install the project dependencies:

   ```bash
   npm install react-router-dom react-loading-skeleton swiper react-icons @mui/material @emotion/react @emotion/styled

5. Install Tailwind CSS:

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init

  Add the following to tailwind.congif.js:
    `
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    `

  Add the following to index.css:
    `
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    `
    
6. Start the development server:

   ```bash
   npm run dev

7. Open your browser and access the app at `http://localhost:5173/`.

## Usage
Here's how you can use the app:

- Explore the template categories on the /marketplace page.
- Use filters to narrow down your search.
- Sort templates by your preferred criteria.
- Use the search bar to find specific templates by categories.

### Bonus Features
We've included some bonus features that enhance your experience:

- Skeletal Loading: Loading more templates includes skeletal loading.
- Template Gallery: Template samples are presented in a scrollable gallery with arrow buttons.
  
## Contributing
Contributions are welcome! If you'd like to improve the app or add new features, feel free to submit a pull request. We encourage creative problem-solving and resourcefulness.

## Contact
If you have any questions or feedback, please reach out to the project owner:
   Allan Joston Fernandes
   Email: allanfernandes459@gmail.com

Enjoy exploring the Email Template Marketplace!
