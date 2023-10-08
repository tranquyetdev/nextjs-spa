# NextJS-SPA

An POC of how to develop a Single Page Application in NextJS 13, using App Router.

- NextJS 13, App Router
- [Route Groups](https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders):
  - (spa): A route group for mutiple SPAs that share the same layout
    - chat/[[...slug]]: Reserve all routes chat/\* to the Chat SPA using [Optional Catch-all Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments)
      - Try out [chat-engine.io](https://chatengine.io/)
      - Try out [chat-ui-kit-react](https://github.com/chatscope/chat-ui-kit-react)
  - (ssr): A route group for all SSR pages (About, Contact)
- Navigate between SSR pages use `next/link`
- Navigate between ` chat/\*` sub-pages use Link component from `react-router-dom`

**Demo**: https://nextjs-spa-nine.vercel.app
