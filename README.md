# 100x - Microblogging Platform

https://100x-site.vercel.app/

## Frontend Low-Level Design

## 1. Understanding Requirements

### Core Features

- **User Registration:** Sign up/in functionality, password management.
- **Posting Tweets:** Users can post tweets upto 280 characters.
- **Following Users:** Ability to follow/unfollow other users and view a list of followers/following.
- **Timeline Generation:** Display Tweets from followed users/recommend tweets in reverse chronological order.
- **Searching:** Functionality to search for users and keywords within Tweets.
- **Interactions:** Functionality to like, retweet, comment, share tweets.
- **Discoverability:** Ability to view profiles of other users and themselves.

### Responsiveness & Accessibility

- Responsive design: Mobile-first approach ensuring UI components adapt to different screen sizes.
- Accessibility:
  - Compliant with WCAG guidelines, including proper color contrast, keyboard navigation, and focus on use of semantic tags for users with disabilities or for screen readers(eg. `alt` text for images).
  - The website should be fully navigable when using only a keyboard.
  - Buttons and Links should have focus styles and be visually distinct by not relying on color alone to convey their meaning.

## 2. Component Breakdown

### 1. Header

The `Header` component dynamically adjusts its content based on the user's location within the application.

- **Home Page:**

  - Displays the 100x logo and user avatar.

- **Non-logged-in Users:**

  - Shows only the 100x logo.

- **Other Pages:**
  - Includes the page name and a back/close button.

### 2. Footer

The `Footer` component discreetly resides at the bottom of the Home Page, offering navigation options:

- **Home Feed Button:**

  - Redirects the user to the home page.

- **User Profile Button:**
  - Redirects the user to their profile page.

### 3. Tabs

The `<Tabs>` component displays the For You and Following tabs on the Home Feed page.

### 4. Tweet

The `<Tweet>` component showcases posts on the home feed and user profile. It accepts post data as props, presenting the post's content, author, likes, comments, and reposts. The interactive buttons for likes, comments, and reposts change colors based on user interactions.

### 5. Button Component (`Button.jsx`)

- **Props:** `variant` (solid, outline, icon), `type` (primary, secondary), `isDisabled`, `children` (label).
- **Functionality:** Renders a button element with styles according to `variant` and `type`.

The `<Button>` component serves as a universal button across the website, featuring dynamic styles based on variant, size, and disabled state. It inherits all native HTML button element props through the spread operator.

### 6. Fieldset

The `<Fieldset>` component maintains a consistent appearance tailored to its purpose. For instance, it adopts a Material UI style for signup forms and a flat look elsewhere.

## State Management

For efficient state management, the Context API within React is employed, alleviating the need for manual prop passing at each component level and avoid prop drilling.(useReducer to be implemented)
Two key contexts are utilized:

### AuthContext

- Manages user authentication state using JSWTokens and provide functions to update authentication state.

### TweetsContext

- Stores tweetText, impressions(likes, comments, retweets), etc.

### UserContext

- Stores profile details captured during the sign-up process(name,email,birthdate,etc)

## Routing

React Router handles website navigation with a variety of routes:

- **Landing Page (/):**

  - Features the 100x banner and login/signup buttons.

- **Signup Page:**

  - Allows users to create an account.

- **Login Page:** (TBD - to be developed)

  - Requires user login before accessing the website.

- **Home Feed Page (/feed):**

  - Displays posts from followed users and the user themselves, utilizing the `<Tweet>` component.

- **User Profile Page (/:username):**

  - Enables users to view their own profile or others'.

- **Post Page (/post/:postId):** (TBD)
  - Allows users to view a post and its comments, incorporating the `<Tweet>` component.

## E. Error Handling and User Feedback

- **User-Friendly Messages:** Offer clear explanations for errors (e.g., "Username already taken", "Failed to load posts").
- **Loading States:** Skeleton screens and spinners to indicate data is being fetched.

## 6. Optimization

### Strategies

- **Lazy Loading:** Load images and components only when they enter the viewport.
- **Code Splitting:** Use dynamic imports to split code into smaller chunks.
- **Optimizing Images:** Implement image compression and correct sizing.

These optimizations improve load times and bandwidth usage, key for scalability.

## 7. Style Guide and Coding Conventions

Define the tailwing config file to define the default palette and styling guidelines.

### Coding Conventions

- Clear component naming conventions.
- Consistent file structure for components and utilities.
- Commenting and documentation best practices.

Unified code standards ensure maintainability and ease of understanding.

Tweet Context - ![Tweet Context](/public/tweet-context.png)

User Context - ![User Context](/public/user-context.png)

Diagram -` https://excalidraw.com/#room=ccbcbf6dd274f5ec902c,t4bGFXY4nxAkOvwwDYKcJA`
![Diagram](/public/image.png)
