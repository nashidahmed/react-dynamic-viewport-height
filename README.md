# React Dynamic Viewport Height

A React hook for handling viewport height and keyboard adjustments on mobile devices. This hook sets a CSS variable (`--vh`) representing the available viewport height, making it easy to create mobile layouts that adapt to browser UI elements and keyboard presence.

## Installation

Install the library from npm:

```bash
npm install react-dynamic-viewport-height
```

## Usage

First, import and call the `useDynamicViewportHeight` hook at the top level of any component where you want dynamic viewport height adjustments.

```tsx
import { useDynamicViewportHeight } from "react-dynamic-viewport-height";

const App = () => {
  useDynamicViewportHeight();
  return <div className="viewport-height">Your content here</div>;
};
export default App;
```

### Option 1: Plain CSS

In your CSS file, use the --vh variable to set dynamic height on elements. Here’s how to add a viewport-height class in plain CSS:

```css
/* App.css */
.viewport-height {
  height: calc(var(--vh, 1vh) * 100);
  background-color: lightblue; /* Example background */
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Then, in your component, apply the CSS class:

```tsx
// App.tsx
import React from "react";
import { useDynamicViewportHeight } from "react-dynamic-viewport-height";
import "./App.css";

const App: React.FC = () => {
  useDynamicViewportHeight();

  return (
    <div className="viewport-height">
      <p style={{ color: "white", fontSize: "20px" }}>
        Content fits the viewport height!
      </p>
    </div>
  );
};

export default App;
```

### Option 2: Tailwind CSS

If you’re using Tailwind CSS, you can directly use the --vh variable in Tailwind’s h-[calc(...)] syntax to achieve the same effect. Add the following Tailwind class to any element you want to fill the viewport height.

```tsx
// App.tsx
import React from "react";
import { useDynamicViewportHeight } from "react-dynamic-viewport-height";

const App: React.FC = () => {
  useDynamicViewportHeight();

  return (
    <div className="h-[calc(var(--vh)_* 100)] bg-blue-500 flex items-center justify-center">
      <p className="text-white text-lg">Content fits to viewport height!</p>
    </div>
  );
};

export default App;
```

### Option 3: Styled Components

If you’re using styled-components, you can set the height property using the --vh variable directly within a styled component.

Install Styled Components (if needed)

```bash
npm install styled-components @types/styled-components
```

#### Usage with Styled Components

```tsx
// App.tsx
import React from "react";
import styled from "styled-components";
import { useDynamicViewportHeight } from "react-dynamic-viewport-height";

const FullHeightDiv = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  background-color: #87ceeb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App: React.FC = () => {
  useDynamicViewportHeight();

  return (
    <FullHeightDiv>
      <p style={{ color: "white", fontSize: "20px" }}>
        Viewport height with styled-components!
      </p>
    </FullHeightDiv>
  );
};

export default App;
```

## How It Works

The `useDynamicViewportHeight` hook sets a `--vh` CSS variable to dynamically reflect the current viewport height. This variable is recalculated on load and resize events, ensuring your content always fits within the visible viewport. The `--vh` variable can be used in any CSS solution to ensure the element takes up 100% of the viewport height.

## Contributing to React Dynamic Viewport Height

Thank you for considering contributing to `react-dynamic-viewport-height`! This guide provides best practices and requirements for making contributions.

### Getting Started

1. **Clone the repository** and create a new branch for each feature, bug fix, or enhancement.
2. **Install dependencies** by running `npm install`.
3. **Link the library locally** to test changes in a sample project:
   - Run `npm link` in the library root directory.
   - In your test project, run `npm link react-dynamic-viewport-height` to link it.

### Development Guidelines

- **Write clear and concise code**: Follow consistent code formatting and use TypeScript for type safety.
- **Test your changes**: Verify that your changes work as expected in a local project before opening a pull request.

### Versioning

This project uses **semantic versioning**:

- **Patch versions** for bug fixes (`1.0.x`).
- **Minor versions** for new features that are backward-compatible (`1.x.0`).
- **Major versions** for breaking changes (`x.0.0`).

To increment versions, use:

```bash
npm version patch   # For bug fixes
npm version minor   # For new features
npm version major   # For breaking changes
```

### Pull Requests

- Ensure each pull request addresses only one feature, bug, or enhancement.
- Include a clear description of the changes.
- Reference related issues if applicable (e.g., "Fixes #123").

### Code of Conduct

Please maintain a respectful and inclusive environment for all contributors. See Contributor Covenant Code of Conduct for details.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
