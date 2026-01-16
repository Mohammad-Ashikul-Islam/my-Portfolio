# My Portfolio

A modern, responsive personal portfolio website built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## 🚀 Features

- **Responsive Design:** Fully responsive layout that looks great on all devices (mobile, tablet, desktop).
- **Dark/Light Mode:** Built-in theme switcher for dark and light mode preferences.
- **Dynamic Hero Section:** Features a typing animation for the name and a blinking cursor effect.
- **Experience Timeline:** Visual timeline to showcase professional experience with color-coded indicators.
- **Skills & Technologies:** Grid layout to display technical skills.
- **Competitive Programming Stats:** Highlighted stats for problem-solving achievements with gradient text effects.
- **Project Showcase:** Section to display featured projects.
- **Contact Section:** "Get in Touch" area with colorful social media icons.

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **UI Components:** Custom components built with React and Tailwind.

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Mohammad-Ashikul-Islam/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  **Open your browser:**

    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📂 Project Structure

```
my-portfolio/
├── app/                  # Next.js App Router pages and layout
├── components/           # React components
│   ├── data/             # Static data (portfolio-data.ts)
│   ├── sections/         # Page sections (Hero, About, Experience, etc.)
│   └── ui/               # Reusable UI components (Cards, Icons, etc.)
├── public/               # Static assets
└── ...
```

## ⚙️ Customization

You can easily update the portfolio content by modifying the data file:

- **`components/data/portfolio-data.ts`**: Contains all the personal information, experience, skills, projects, and social links. Update this file to reflect your own details.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
