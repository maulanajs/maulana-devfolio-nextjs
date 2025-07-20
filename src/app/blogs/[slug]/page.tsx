import { blogs } from '@/contents/blogs'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FaCalendarAlt, FaClock, FaArrowLeft, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

// Generate mock content for the blog post
const generateBlogContent = (title: string, slug: string) => {
  if (slug === 'getting-started-with-nextjs-14') {
    return `
# Getting Started with Next.js 14

Next.js 14 was announced at the Next.js Conf on October 26, 2023, featuring several new improvements and optimizations over previous versions.

## Key Features in Next.js 14

### 1. Turbopack Improvements

Turbopack, Next.js' Rust-based bundler, has seen significant improvements. It's now **up to 5x faster** than Next.js 13 and up to 35x faster than Vite for HMR (Hot Module Replacement). This translates to near-instantaneous updates during development.

### 2. Server Actions Stabilization

Server Actions, which were introduced as an experimental feature in Next.js 13, have been stabilized in version 14. This feature allows you to define server-side functions that can be called directly from your React components:

\`\`\`tsx
// app/actions.ts
'use server'

export async function submitForm(formData: FormData) {
  // Server-side form processing
  const name = formData.get('name')
  
  // Database operations, email sending, etc.
  await saveToDatabase({ name })
  
  // Return result to the client
  return { success: true }
}
\`\`\`

### 3. Partial Prerendering (Preview)

Next.js 14 introduces Partial Prerendering as a preview feature. This hybrid rendering approach combines static and dynamic content:

\`\`\`tsx
// Static shell is cached and streamed instantly
export default async function Page() {
  return (
    <main>
      <h1>Welcome to my store</h1>
      
      {/* Dynamic content is loaded in parallel */}
      <Suspense fallback={<ProductSkeleton />}>
        <Products />
      </Suspense>
    </main>
  )
}
\`\`\`

### 4. Optimized Dependencies

Next.js 14 ships with optimized dependencies including React 18.3, which reduces bundle sizes and improves performance.

## How to Install Next.js 14

To create a new Next.js 14 application, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

To upgrade an existing Next.js project:

\`\`\`bash
npm install next@latest react@latest react-dom@latest
\`\`\`

## Migration Considerations

If you're upgrading from Next.js 13, there are a few things to consider:

1. **Server Actions**: If you were using the experimental server actions, you'll need to update their implementation to match the stabilized API.

2. **App Router**: Next.js 14 continues to emphasize the App Router pattern introduced in version 13, further deprecating the Pages Router.

3. **Minimum Node.js Version**: Next.js 14 requires Node.js 18.17 or later.

## Conclusion

Next.js 14 brings substantial performance improvements and feature stabilization that makes building React applications even more developer-friendly. The combination of Turbopack's speed, stable Server Actions, and the new Partial Prerendering preview offers a compelling platform for modern web development.

For a deeper dive, check out the [official Next.js documentation](https://nextjs.org/docs).
`;
  } else if (slug === 'mastering-typescript-for-react') {
    return `
# Mastering TypeScript for React

TypeScript has become an essential tool in modern React development, providing type safety, improved developer experience, and better code quality. This guide will walk you through everything you need to know to master TypeScript in your React projects.

## Why TypeScript for React?

React is a powerful library for building user interfaces, but JavaScript's dynamic typing can lead to subtle bugs that are hard to catch during development. TypeScript addresses these issues by adding static type checking to JavaScript, helping you catch errors before they reach production.

### Benefits of TypeScript in React Projects

1. **Early Error Detection**: Catch type errors during development rather than runtime
2. **Improved IDE Experience**: Better autocompletion, navigation, and refactoring tools
3. **Self-Documenting Code**: Types serve as documentation for components and functions
4. **Enhanced Productivity**: Reduce debugging time and increase confidence in code changes
5. **Better Team Collaboration**: Clear interfaces for components and functions

## Setting Up TypeScript with React

Getting started with TypeScript and React is straightforward with modern tooling.

### Creating a New TypeScript React Project

Using Create React App:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

Using Next.js:

\`\`\`bash
npx create-next-app@latest my-app --typescript
\`\`\`

Using Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

### Adding TypeScript to an Existing React Project

1. Install TypeScript and type definitions:

\`\`\`bash
npm install --save typescript @types/react @types/react-dom
\`\`\`

2. Create a \`tsconfig.json\` file:

\`\`\`json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
\`\`\`

3. Rename your \`.js\` files to \`.tsx\` (for components) or \`.ts\` (for non-React code)

## Essential TypeScript Concepts for React

### Typing Props

Props are a fundamental concept in React. With TypeScript, you can define the exact shape of your component's props:

\`\`\`tsx
// Using interface (preferred for props)
interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: 'primary' | 'secondary' | 'danger'; // Optional prop with specific allowed values
  disabled?: boolean;
}

// Functional component with typed props
const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  color = 'primary',
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      className={\`btn btn-\${color}\`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
\`\`\`

### Typing State with useState

TypeScript can infer types from initial values, but it's often better to explicitly type your state:

\`\`\`tsx
// Simple state
const [count, setCount] = useState<number>(0);

// Complex state
interface User {
  id: number;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);

// When you need a union type
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
\`\`\`

### Working with Events

TypeScript provides specific types for different DOM events:

\`\`\`tsx
// Button click
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log('Button clicked!');
};

// Form submission
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  // Submit form logic
};

// Input change
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
};
\`\`\`

## Advanced TypeScript Patterns in React

### Generic Components

Create reusable components that work with different data types:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
<List
  items={['Apple', 'Banana', 'Orange']}
  renderItem={(item) => <span>{item}</span>}
/>

<List
  items={[{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]}
  renderItem={(item) => <span>{item.name}</span>}
/>
\`\`\`

### Using React Context with TypeScript

Typing your context properly ensures type safety throughout your application:

\`\`\`tsx
// Define the shape of your context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

// Create context with an initial default value
const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
});

// Provider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Usage in a component
const ThemedButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <button
      onClick={toggleTheme}
      className={\`btn \${theme === 'dark' ? 'btn-light' : 'btn-dark'}\`}
    >
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};
\`\`\`

### Working with Custom Hooks

TypeScript makes your custom hooks more reliable and easier to use:

\`\`\`tsx
// Custom hook for form fields
function useField<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [error, setError] = useState<string | null>(null);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
    setError(null);
  };
  
  const validate = (validator: (value: T) => string | null) => {
    const errorMessage = validator(value);
    setError(errorMessage);
    return !errorMessage;
  };
  
  return { value, onChange, error, validate };
}

// Usage
const LoginForm = () => {
  const email = useField<string>('');
  const password = useField<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isEmailValid = email.validate((value) => 
      !value ? 'Email is required' : !value.includes('@') ? 'Invalid email' : null
    );
    
    const isPasswordValid = password.validate((value) => 
      !value ? 'Password is required' : value.length < 6 ? 'Password too short' : null
    );
    
    if (isEmailValid && isPasswordValid) {
      // Submit form
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email.value}
          onChange={email.onChange}
          placeholder="Email"
        />
        {email.error && <p className="error">{email.error}</p>}
      </div>
      
      <div>
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
          placeholder="Password"
        />
        {password.error && <p className="error">{password.error}</p>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
};
\`\`\`

## TypeScript with Popular React Libraries

### Redux with TypeScript

Using Redux with TypeScript provides excellent type safety for your global state:

\`\`\`tsx
// Action types
enum ActionType {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

// Action interfaces
interface AddTodoAction {
  type: ActionType.ADD_TODO;
  payload: { text: string };
}

interface ToggleTodoAction {
  type: ActionType.TOGGLE_TODO;
  payload: { id: number };
}

interface RemoveTodoAction {
  type: ActionType.REMOVE_TODO;
  payload: { id: number };
}

// Union type for all actions
type TodoAction = AddTodoAction | ToggleTodoAction | RemoveTodoAction;

// State interface
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  loading: boolean;
}

// Reducer with typed state and actions
const initialState: TodoState = {
  todos: [],
  loading: false,
};

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    // Other cases...
    default:
      return state;
  }
};
\`\`\`

### React Query with TypeScript

React Query works beautifully with TypeScript for API calls:

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

// Fetch function with return type
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('https://api.example.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
};

// Component using the typed query
function UserList() {
  const { data: users, error, isLoading } = useQuery<User[], Error>('users', fetchUsers);
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
}
\`\`\`

## Best Practices for TypeScript in React

1. **Prefer interfaces for public APIs and types for complex unions**
   
   Interfaces are generally better for component props and context values, while type aliases work well for union types and complex types.

2. **Use strict mode and avoid any**
   
   TypeScript's strict mode catches more errors, and avoiding \`any\` ensures better type safety.

3. **Create reusable type definitions**
   
   Create a \`types.ts\` file or folder to store common types used throughout your application.

4. **Use type narrowing for conditional rendering**
   
   \`\`\`tsx
   type LoadingState = { status: 'loading' };
   type ErrorState = { status: 'error'; error: Error };
   type SuccessState = { status: 'success'; data: User[] };
   
   type State = LoadingState | ErrorState | SuccessState;
   
   function UserComponent({ state }: { state: State }) {
     if (state.status === 'loading') {
       return <Spinner />;
     }
     
     if (state.status === 'error') {
       return <ErrorMessage message={state.error.message} />;
     }
     
     // TypeScript knows state is SuccessState here
     return (
       <ul>
         {state.data.map(user => <li key={user.id}>{user.name}</li>)}
       </ul>
     );
   }
   \`\`\`

5. **Use discriminated unions for state management**
   
   This pattern works well for reducers and complex state:
   
   \`\`\`tsx
   type RequestState<T> = 
     | { status: 'idle' }
     | { status: 'loading' }
     | { status: 'success'; data: T }
     | { status: 'error'; error: Error };
   \`\`\`

## Conclusion

TypeScript and React form a powerful combination for building robust web applications. By properly typing your components, state, events, and APIs, you gain confidence in your code and improve the developer experience. As your applications grow in complexity, the benefits of TypeScript become even more apparent.

Start with the basics of typing props and state, then gradually adopt more advanced patterns as you become comfortable with the TypeScript ecosystem. The initial learning curve pays off with fewer bugs, better tooling support, and more maintainable code.

Remember, TypeScript is designed to help you catch errors early, document your code better, and enhance the development experience. Embrace its capabilities to take your React applications to the next level.
`;
  } else if (slug === 'building-responsive-layouts-with-tailwind-css') {
    return `
# Building Responsive Layouts with Tailwind CSS

Tailwind CSS has revolutionized the way developers approach responsive web design by providing a utility-first framework that makes building beautiful, responsive layouts faster and more intuitive than ever before.

## What Makes Tailwind CSS Great for Responsive Design?

Tailwind's responsive design system is based on a mobile-first approach, allowing you to build layouts that look great on any device size. The framework comes with five default breakpoints:

- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

These breakpoints can be easily customized in your tailwind.config.js file to match your specific design requirements.

## Core Responsive Concepts in Tailwind CSS

### 1. Mobile-First Approach

Tailwind follows a mobile-first methodology, meaning that unprefixed utilities apply to all screen sizes, while prefixed utilities apply to the specified breakpoint and above:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  <!-- Text will be small on mobile, medium on tablets, and large on desktops -->
</div>
\`\`\`

### 2. Responsive Grid Layouts

Creating responsive grids with Tailwind is straightforward using the built-in grid utilities:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-white p-4 rounded shadow">Item 1</div>
  <div class="bg-white p-4 rounded shadow">Item 2</div>
  <div class="bg-white p-4 rounded shadow">Item 3</div>
  <!-- Items stack vertically on mobile, 2 columns on tablets, 3 columns on desktops -->
</div>
\`\`\`

### 3. Flexbox for Complex Layouts

Tailwind's flexbox utilities make it easy to create advanced responsive layouts:

\`\`\`html
<div class="flex flex-col md:flex-row items-center justify-between">
  <div class="w-full md:w-1/2 mb-4 md:mb-0">
    <!-- Left content -->
  </div>
  <div class="w-full md:w-1/2">
    <!-- Right content -->
  </div>
</div>
\`\`\`

### 4. Hidden & Visible Elements

You can conditionally show or hide elements based on screen size:

\`\`\`html
<div class="hidden md:block">
  <!-- Only visible on md screens and above -->
</div>

<div class="block md:hidden">
  <!-- Only visible on screens smaller than md -->
</div>
\`\`\`

## Building Common UI Components with Tailwind

### Responsive Navigation Menu

Here's how to build a navigation that transforms from a mobile menu to a desktop navbar:

\`\`\`html
<!-- Navigation container -->
<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <!-- Logo -->
      <div class="flex-shrink-0 flex items-center">
        <img class="h-8 w-auto" src="/logo.svg" alt="Logo" />
      </div>
      
      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="#" class="px-3 py-2 text-primary hover:text-primary-dark">Home</a>
        <a href="#" class="px-3 py-2 text-gray-600 hover:text-primary">Features</a>
        <a href="#" class="px-3 py-2 text-gray-600 hover:text-primary">Pricing</a>
        <a href="#" class="px-3 py-2 text-gray-600 hover:text-primary">About</a>
      </div>
      
      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button class="text-gray-600 hover:text-primary">
          <!-- Menu icon -->
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
  <!-- Mobile navigation -->
  <div class="md:hidden bg-white">
    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      <a href="#" class="block px-3 py-2 text-primary font-medium">Home</a>
      <a href="#" class="block px-3 py-2 text-gray-600 hover:text-primary">Features</a>
      <a href="#" class="block px-3 py-2 text-gray-600 hover:text-primary">Pricing</a>
      <a href="#" class="block px-3 py-2 text-gray-600 hover:text-primary">About</a>
    </div>
  </div>
</nav>
\`\`\`

### Responsive Card Grid

A common pattern for displaying content in a responsive grid:

\`\`\`html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
  <!-- Card 1 -->
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <img class="w-full h-48 object-cover" src="image1.jpg" alt="Card image" />
    <div class="p-4">
      <h3 class="font-bold text-xl mb-2">Card Title</h3>
      <p class="text-gray-700">This is some card content that explains what this item is about.</p>
      <button class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark">Learn More</button>
    </div>
  </div>
  
  <!-- Repeat for other cards -->
</div>
\`\`\`

### Responsive Hero Section

Creating a hero section that adapts to different screen sizes:

\`\`\`html
<div class="bg-gradient-to-r from-purple-600 to-blue-500">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="py-12 md:py-20">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-8 md:mb-0">
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Build beautiful responsive websites faster with Tailwind CSS
          </h1>
          <p class="mt-4 text-lg md:text-xl text-white opacity-80">
            A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#" class="bg-white text-primary font-medium py-3 px-6 rounded-lg text-center hover:bg-gray-100">
              Get Started
            </a>
            <a href="#" class="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-lg text-center hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>
        <div class="md:w-1/2">
          <img src="/hero-image.svg" alt="Hero Image" class="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
</div>
\`\`\`

## Advanced Responsive Techniques

### Custom Breakpoints

Sometimes the default breakpoints aren't exactly what you need. You can customize them in your tailwind.config.js file:

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
\`\`\`

### Container Queries

With the introduction of container queries in modern browsers, Tailwind v3.3+ now provides support for them using the @container directive:

\`\`\`html
<div class="@container">
  <div class="@md:flex @md:items-center">
    <!-- Content that responds to parent container width -->
  </div>
</div>
\`\`\`

### Responsive Typography

Create a fluid type scale that changes based on viewport size:

\`\`\`html
<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
  Responsive Heading
</h1>
\`\`\`

## Best Practices for Responsive Design with Tailwind

1. **Start with mobile designs first** - Build the mobile version first, then add responsive utilities for larger screens.

2. **Use the responsive inspector** - Use browser dev tools to test your designs at different viewport sizes.

3. **Group responsive utilities** - Keep related responsive utilities together for better readability:

\`\`\`html
<!-- Good: Related responsive classes are grouped -->
<div class="w-full md:w-1/2 text-sm md:text-base lg:text-lg">
  <!-- Content -->
</div>

<!-- Avoid: Mixed responsive prefixes make code harder to read -->
<div class="w-full text-sm md:w-1/2 md:text-base lg:text-lg">
  <!-- Content -->
</div>
\`\`\`

4. **Extract components for complex UI** - Use Tailwind's @apply directive or React/Vue components to avoid repetition.

5. **Use DevTools to debug** - Browser developer tools are essential for testing responsive behavior.

## Conclusion

Tailwind CSS provides a powerful toolkit for building responsive layouts that work across all devices. By leveraging its utility-first approach and responsive modifiers, you can create complex, adaptive designs without ever leaving your HTML or writing custom CSS.

The mobile-first methodology, combined with sensible breakpoints and comprehensive utilities, makes responsive design more intuitive and maintainable than traditional approaches. Whether you're building a simple landing page or a complex web application, Tailwind's responsive features will help you create beautiful interfaces that look great on any screen.

Start implementing these techniques in your next project, and you'll quickly see how Tailwind CSS can transform your responsive design workflow.
`;
  } else if (slug === 'deploying-nextjs-applications-on-vercel') {
    return `
# Deploying Next.js Applications on Vercel

Deploying Next.js applications has never been easier, especially with Vercel, the platform created by the same team behind Next.js.

## Why Vercel?

Vercel is built specifically for frontend frameworks like Next.js and provides several advantages:

1. **Zero Configuration**: Vercel automatically detects that you're using Next.js and configures the build settings accordingly.
2. **Preview Deployments**: Every pull request gets its own preview URL.
3. **Global Edge Network**: Your application is served from edge locations worldwide, ensuring low latency for all users.
4. **Serverless Functions**: API routes in Next.js are automatically converted to serverless functions.
5. **Environment Variables**: Easy management of environment variables for different deployment environments.

## Step-by-Step Deployment Guide

### 1. Prepare Your Next.js Project

Before deploying, make sure your project is ready:

\`\`\`bash
# Install dependencies
npm install

# Build your application
npm run build

# Verify that everything works locally
npm start
\`\`\`

### 2. Push Your Code to GitHub

Vercel integrates seamlessly with GitHub:

\`\`\`bash
# Initialize a Git repository if you haven't already
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Create a repository on GitHub and push your code
git remote add origin https://github.com/username/your-repo.git
git push -u origin main
\`\`\`

### 3. Deploy to Vercel

There are two ways to deploy your application to Vercel:

#### Option 1: Deploy from the Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up or log in.
2. Click "New Project."
3. Import your repository from GitHub.
4. Vercel will automatically detect that you're using Next.js.
5. Configure any environment variables if needed.
6. Click "Deploy."

#### Option 2: Deploy Using the Vercel CLI

1. Install the Vercel CLI:
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. Log in to your Vercel account:
   \`\`\`bash
   vercel login
   \`\`\`

3. Deploy your application:
   \`\`\`bash
   vercel
   \`\`\`

4. Follow the prompts to configure your deployment.

### 4. Configure Custom Domains (Optional)

Once your application is deployed:

1. Go to the Vercel dashboard.
2. Select your project.
3. Click on "Domains."
4. Add your custom domain and follow the instructions to configure DNS.

## Advanced Configuration

### Environment Variables

To add environment variables:

1. Go to your project on the Vercel dashboard.
2. Click on "Settings."
3. Select "Environment Variables."
4. Add your variables for Development, Preview, and Production environments.

### Automatic Deployments

By default, Vercel automatically deploys your application when you push changes to your GitHub repository. You can configure this behavior:

1. Go to your project on the Vercel dashboard.
2. Click on "Settings."
3. Select "Git Integration."
4. Configure the production branch and auto-deployment settings.

## Conclusion

Deploying Next.js applications on Vercel is a straightforward process that takes just a few minutes. The platform's tight integration with Next.js ensures that you get the best performance and developer experience out of the box.

For more detailed information, check out the [official Vercel documentation](https://vercel.com/docs).
`;
  } else if (slug === 'building-a-restful-api-with-nodejs-and-express') {
    return `
# Building a RESTful API with Node.js and Express

Creating robust, scalable APIs is a fundamental skill for modern web developers. This guide will walk you through building a RESTful API using Node.js and Express from the ground up.

## What is a RESTful API?

REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP requests to perform CRUD operations (Create, Read, Update, Delete) on resources, which are represented as URLs.

Key principles of REST include:

- **Statelessness**: Each request from client to server must contain all information needed to understand and complete the request
- **Resource-Based**: Resources are identified in requests using URIs
- **HTTP Methods**: Using standard HTTP methods (GET, POST, PUT, DELETE) for operations
- **Representation**: Resources can have different representations (JSON, XML, etc.)

## Setting Up Your Environment

### Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor (VS Code, Sublime Text, etc.)
- [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) (for testing API endpoints)

### Initial Project Setup

Let's create a new project and install necessary dependencies:

\`\`\`bash
# Create a project directory
mkdir node-express-api
cd node-express-api

# Initialize a new npm project
npm init -y

# Install core dependencies
npm install express mongoose dotenv

# Install development dependencies
npm install --save-dev nodemon
\`\`\`

### Project Structure

A well-organized project structure helps maintain your code as it grows:

\`\`\`
node-express-api/
├── config/             # Configuration files
│   └── db.js           # Database configuration
├── controllers/        # Request handlers
│   └── productController.js
├── models/             # Database models
│   └── productModel.js
├── routes/             # API routes
│   └── productRoutes.js
├── middleware/         # Custom middleware
│   └── errorMiddleware.js
├── .env                # Environment variables
├── .gitignore          # Git ignore file
├── package.json        # Project metadata and dependencies
└── server.js           # Entry point
\`\`\`

## Creating the Basic Server

Let's start by setting up a basic Express server in \`server.js\`:

\`\`\`javascript
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Simple route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API' });
});

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

Create a \`.env\` file to store environment variables:

\`\`\`
PORT=5000
MONGO_URI=your_mongodb_connection_string
\`\`\`

## Connecting to MongoDB

Let's set up our database connection. First, create \`config/db.js\`:

\`\`\`javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(\`MongoDB Connected: \${conn.connection.host}\`);
  } catch (error) {
    console.error(\`Error: \${error.message}\`);
    process.exit(1);
  }
};

module.exports = connectDB;
\`\`\`

Now update \`server.js\` to include the database connection:

\`\`\`javascript
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express app
const app = express();
// ... rest of server.js remains the same
\`\`\`

## Creating a Data Model

Let's create a simple product model in \`models/productModel.js\`:

\`\`\`javascript
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a product name'],
    trim: true,
    maxLength: [100, 'Name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxLength: [1000, 'Description cannot be more than 1000 characters']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price'],
    min: [0, 'Price must be non-negative']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: ['Electronics', 'Books', 'Clothing', 'Food', 'Other']
  },
  inStock: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
\`\`\`

## Creating Controllers

Controllers handle the business logic of our API. Let's create \`controllers/productController.js\`:

\`\`\`javascript
const Product = require('../models/productModel');

// @desc    Get all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a product
// @route   POST /api/products
// @access  Private
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.status(200).json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};
\`\`\`

## Setting Up Routes

Now let's create routes in \`routes/productRoutes.js\`:

\`\`\`javascript
const express = require('express');
const router = express.Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports = router;
\`\`\`

Update \`server.js\` to include these routes:

\`\`\`javascript
// ... existing code
const productRoutes = require('./routes/productRoutes');

// ... after app initialization and middleware
app.use('/api/products', productRoutes);
// ... rest of server.js
\`\`\`

## Adding Error Handling Middleware

Let's create an error handling middleware in \`middleware/errorMiddleware.js\`:

\`\`\`javascript
const notFound = (req, res, next) => {
  const error = new Error(\`Not Found - \${req.originalUrl}\`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { notFound, errorHandler };
\`\`\`

Add these to \`server.js\`:

\`\`\`javascript
// ... existing code
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// ... after routes
app.use(notFound);
app.use(errorHandler);
// ... rest of server.js
\`\`\`

## Testing the API

You can use Postman or Insomnia to test your API endpoints:

1. **GET /api/products**: Retrieve all products
2. **GET /api/products/:id**: Retrieve a single product
3. **POST /api/products**: Create a new product
4. **PUT /api/products/:id**: Update a product
5. **DELETE /api/products/:id**: Delete a product

## Authentication and Authorization

For a production API, you'll want to implement user authentication. Here's a quick overview of how to add JWT authentication:

1. Install additional packages:
   \`\`\`bash
   npm install jsonwebtoken bcryptjs
   \`\`\`

2. Create a user model
3. Implement user registration and login endpoints
4. Create middleware to protect routes

## Advanced Features

Once you have the basics working, consider these enhancements:

- **Filtering**: Allow clients to filter results
- **Pagination**: Implement pagination for large result sets
- **Sorting**: Enable sorting of results
- **Rate Limiting**: Prevent abuse of your API
- **Documentation**: Use Swagger or similar tools to document endpoints

## Deployment

When ready to deploy:

1. Set up environment variables
2. Configure for production
3. Deploy to a cloud provider (Heroku, AWS, Digital Ocean, etc.)

## Conclusion

Building a RESTful API with Node.js and Express provides a solid foundation for creating scalable web applications. This approach separates concerns, making your codebase easier to maintain and extend as requirements change.

By following REST principles and organizing your code properly, you create APIs that are intuitive to use, well-structured, and can grow with your application's needs.
`;
  } else if (slug === 'understanding-react-hooks') {
    return `
# Understanding React Hooks

React Hooks are a powerful feature introduced in React 16.8 that allows you to use state and other React features without writing a class. This guide will walk you through the basics of React Hooks, their rules, and how to use them effectively.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They are:

1. **State Hook**: \`useState\` - Allows you to add state to your component.
2. **Effect Hook**: \`useEffect\` - Allows you to perform side effects (like data fetching, subscriptions, or manually changing the DOM) in your component.
3. **Context Hook**: \`useContext\` - Allows you to access the context (like theme, user, locale) in your component.
4. **Ref Hook**: \`useRef\` - Allows you to persist values between renders.
5. **Custom Hooks**: You can create your own hooks to reuse logic.

## Rules of Hooks

1. **Only Call Hooks at the Top Level**: Never call a hook inside a loop, condition, or nested function. This ensures that hooks are called in the same order on every render.

2. **Only Call Hooks from React Functions**: You cannot call a hook from a regular JavaScript function. This rule is enforced by the linter.

## Common Hooks

### useState

\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

### useEffect

\`\`\`tsx
import { useState, useEffect } from 'react';

function DataFetching() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount
}
\`\`\`

### useContext

\`\`\`tsx
import { createContext, useContext } from 'react';

const ThemeContext = createContext(null);

function ThemedApp() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value="dark">
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme('light')}>Change Theme</button>
      </div>
    </ThemeContext.Provider>
  );
}
\`\`\`

### useRef

\`\`\`tsx
import { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
\`\`\`

## Custom Hooks

You can create your own hooks to reuse logic. For example, a custom hook for form validation:

\`\`\`tsx
import { useState } from 'react';

function useField(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setError(null);
  };

  const validate = (validator: (value: string) => string | null) => {
    const errorMessage = validator(value);
    setError(errorMessage);
    return !errorMessage;
  };

  return { value, onChange, error, validate };
}

function LoginForm() {
  const email = useField('');
  const password = useField('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isEmailValid = email.validate((value) => 
      !value ? 'Email is required' : !value.includes('@') ? 'Invalid email' : null
    );

    const isPasswordValid = password.validate((value) => 
      !value ? 'Password is required' : value.length < 6 ? 'Password too short' : null
    );

    if (isEmailValid && isPasswordValid) {
      // Submit form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          value={email.value}
          onChange={email.onChange}
          placeholder="Email"
        />
        {email.error && <p className="error">{email.error}</p>}
      </div>
      
      <div>
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
          placeholder="Password"
        />
        {password.error && <p className="error">{password.error}</p>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

## Best Practices for React Hooks

1. **Only use hooks at the top level of your component**
   
   This ensures that hooks are called in the same order on every render.

2. **Do not call hooks inside loops, conditions, or nested functions**
   
   This violates the rule of only calling hooks at the top level.

3. **Do not call hooks from regular JavaScript functions**
   
   This is enforced by the linter.

4. **Create reusable custom hooks**
   
   If you find yourself repeating logic across multiple components, create a custom hook.

5. **Follow the rules of hooks**
   
   Always call hooks at the top level, only from React functions, and ensure they are called in the same order.

## Conclusion

React Hooks are a powerful and flexible way to manage state and side effects in your React components. By following the rules and best practices, you can create clean, maintainable, and reusable code. The ability to use state and effects directly in function components makes your code more concise and easier to understand.

Start experimenting with hooks in your projects, and you'll quickly see how they can simplify your code and improve your application's maintainability.
`;
  }
  
  return `
# ${title}

This blog post content is coming soon. We're working hard to create valuable content for you.

Check back soon for updates!
  `;
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  // Properly await the params object before using it
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const blog = blogs.find(blog => blog.slug === slug);
  
  // If blog not found, show 404
  if (!blog) {
    notFound();
  }
  
  // Generate mock content for this blog post
  const content = generateBlogContent(blog.title, slug);

  // Format content with HTML
  const formattedContent = content
    .replace(/^# (.*?)$/gm, '<h1 class="text-2xl sm:text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/^## (.*?)$/gm, '<h2 class="text-xl sm:text-2xl font-bold mt-6 mb-3 text-primary">$1</h2>')
    .replace(/^### (.*?)$/gm, '<h3 class="text-lg sm:text-xl font-bold mt-5 mb-2">$1</h3>')
    .replace(/^(.*?)$/gm, '<p class="my-4 text-base sm:text-lg">$1</p>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/```([^`]*)```/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto my-6"><code>$1</code></pre>')
    .replace(/`([^`]*)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 rounded-sm">$1</code>');
  
  return (
    <div className="container max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-6">
        <Link 
          href="/blogs" 
          className="flex items-center text-primary hover:underline gap-2 mb-8"
        >
          <FaArrowLeft />
          <span>Back to blogs</span>
        </Link>
      </div>
      
      <article className="bg-white dark:bg-dark/60 rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-secondary mb-6">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="h-4 w-4" />
              <span>{new Date(blog.date).toLocaleDateString()}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <FaClock className="h-4 w-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          
          <div className="border-b border-gray-200 dark:border-gray-700 pb-4" />
        </header>
        
        <div 
          className="prose dark:prose-invert prose-headings:text-primary prose-a:text-primary prose-img:rounded-xl prose-img:shadow-md max-w-none"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
            <h3 className="font-medium text-lg">Share this article:</h3>
            <div className="flex gap-4">
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(`https://yoursite.com/blogs/${blog.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="Share on Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yoursite.com/blogs/${blog.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="Share on Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yoursite.com/blogs/${blog.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </article>
      
      <div className="mt-12 text-center">
        <Link 
          href="/blogs" 
          className="inline-flex items-center bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full transition-colors font-medium"
        >
          <FaArrowLeft className="mr-2" />
          <span>Back to all articles</span>
        </Link>
      </div>
    </div>
  );
} 