## Croct Application

This challenge had the goal to integrate a React app whith the Croct plugin to pratice some concepts about personalization. The sandbox which I could use already has the differents contents which I need to show in the application. This way, I created some components to call the home-banner Slot and make the user selection. In the end the content of the page change if we change the user, but I don't now how to personalize the sandbox content(or if I can do that) to put images or something like this.<br>
Obs.: I dont know how to do automated tests, but I always been curious about it so I get the test archives from a exemple and did modifications to test my app. Although they are having problems.

## Inicialization Codes

This time I did a Next.js project using the command:
```bash
npx create-next-app@latest --typescript
```
After this I cleanned my project to start the Croct app. To test my application you can make a git clone on this repository and install the dependencies with:
```bash
npm install
```
The server start on http://localhost:3000, and to start server you can run:
```bash
npm run dev
```

## References

[Plug React.Js Documentation](https://github.com/croct-tech/plug-react)<br>
[Plug JavaScript Documentation](https://github.com/croct-tech/plug-js)<br>
[Plug Examples](https://github.com/croct-tech/plug-react/tree/master/examples)<br>
[Next.Js](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)<br>
[Jest Setup](https://www.kyrelldixon.com/blog/setup-jest-and-react-testing-library-with-nextjs)
