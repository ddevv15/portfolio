# Portfolio Project Commands and Guidelines

## Build & Development Commands
- `npm start` - Start development server
- `npm run build` - Build production version
- `npm test` - Run all tests
- `npm test -- --testNamePattern="test name"` - Run specific test
- `npm run deploy` - Deploy to GitHub Pages

## Code Style Guidelines
- **React Components**: Use functional components with hooks (useState, useEffect, useRef)
- **Imports**: Group imports (React/hooks, third-party libraries, components, styles) with blank lines between groups
- **CSS**: Primarily uses Tailwind CSS classes for styling with some custom CSS files for specific components
- **Error Handling**: Uses conditional rendering and null checks (e.g., `if (!ctn) return;`)
- **WebGL**: Uses proper cleanup in useEffect returns - cancels animations, removes event listeners, and releases WebGL context
- **Naming**: 
  - Components: PascalCase (e.g., Navigation, Experience, Projects, Aurora)
  - Functions/variables: camelCase (e.g., handleToggleMenu, menuOpen)
  - Files: Component names match file names
- **Props**: Uses destructuring with default values (e.g., `const { colorStops = ["#40ffaa", "#4079ff"], amplitude = 1.0 } = props;`)
- **State Management**: Primarily uses React hooks (useState, useEffect, useRef) with some components using React.createElement instead of JSX