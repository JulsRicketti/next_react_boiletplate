# NextJS and ReactJS General Purpose Boilerplate

General purpose client app boilerplate based on NextJS and ReactJS.

## Setup

Clone repo to your workspace

> git clone https://github.com/JulsRicketti/next_react_boiletplate.git

Install dependencies

> npm install

Run

> npm run dev

## App structure

For this boilerplate app I have opted for a flatter structure with all the main folders on the root.

```
root
|
├── api/
│   └── index.js
├── components/
├── config/
├── lib/
│   └── index.js
├── pages/
├── static/
```

- API: this space is intended for functions that will do the API calls
- Components: this folder is dedicated to your react components.
- Config: your config object which may be used accross the app. `Note: make sure to remember this is a client config object, so anything put in here must be expected to be accessed by anyone.`
- Lib: for your general purpose non-api call related functions
- Pages: your NextJS pages. Each file must be named the name of the route you wish for it to go. Otherwise, it may just be a React component containing the full page. For the examples so far, just a re-exporting of the React components will do.
- Static: static files used throughout the app: stylesheet, images, etc
