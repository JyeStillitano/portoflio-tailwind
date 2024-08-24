This is a [Next.js](https://nextjs.org/) web app. You can follow my design process on [Figma](https://www.figma.com/design/7CQBA0EwAEx7YvXiFRIskO/Website?node-id=0%3A1&t=2exI8fWz6AsemVWX-1).

# What's The Tech Stack?

This project has been bootstrapped using [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). In such, the Next framework is at the core of this technical stack. The primary functionality has been written in [TypeScript](https://www.typescriptlang.org/), Microsoft's statically typed extension of JavaScript. This has been chosen to catch errors in code early on and for the ease of development that comes from modern IDE's autocompletion.

## Environment Variables

To utilise the noidemailer SMTP functionality without exposing private login credentials, four environment variables are required:

- SMTP_HOST (SMTP Provider URL)
- SMTP_PORT (SMTP Provider Port)
- SMTP_USER (Email)
- SMTP_PASS (Password)

## Running the development environment.

To run the development server, navigate to the project directory and execute the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Once the development server is running, navigate to [http://localhost:3000](http://localhost:3000) in your browser of choice.

## Deploying to production.

This project is currently version controlled on [GitHub](https://github.com/JyeStillitano/jyestillitano.github.io).

The project was setup with a Next.js YAML template to, on push to main, automatically build and deploy to a free GitHub Pages website, using the default domain [https://jyestillitano.github.io/](https://jyestillitano.github.io/).

To add dynamic functionality, the application is now hosted on [Netlify](https://www.netlify.com/) with a custom domain [https://jyes.dev/](https://jyes.dev/). The Netlify deployment has been setup to automatically build and deploy the website on push to main.
The old deployment is still maintained so that the website is available through old links.
Accessing the website through GitHub Pages will now redirect the user to the new Netlify deployment so that all dynamic functionality works.

Note: The host platform requires environment variables to be setup as outlined above.
