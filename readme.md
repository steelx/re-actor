# Re-actor

 - react
 - react-dom
 - react-router

### The bundle
 - `es5` everywhere, don't worry
 - `sass|scss` support
 - `autoprefixer`
 - `bootstrap-sass`
 - `dev server` with hot reloading
 - `http|https` build preview
 - [build] `minifide|hashed`

### Tree
```shell
.
├── /bower_components/          # stuff from bower
├── /build/                     # compressed files after build task
│   ├── /images/                # images
│   ├── /scripts/               # js
│   ├── /styles/                # css
│   └── ...                     # index.html, favicon.ico, ...
├── /config/                    # webpack config
│   ├── dev.config.js           # development config
│   └── prod.config.js          # production config
├── /node_modules/              # stuff from npm
├── /server/                    # preview server
│   ├── cert.pem                # for https
│   ├── index.js                # server entry
│   └── key.pem                 # for https
├── /source/                    # stuff to work on
│   ├── /components/            # react components
│   ├── /images/                # images to be required in css/html/js
│   ├── /layouts/               # react component that will wrap the application
│   ├── /routes/                # routes and views
│       ├── index.js            # lists of routes
│       └── ...                 # components as views
│   ├── /static/                # static files that won't be touched by webpack, they will be thrown to ./build
│   ├── /styles/                # styles, css, scss, sass
│   ├── index.html              # template for index.html, calls to css and js files will be injected there
│   └── main.js                 # application entry
├── bower.json                  # bower config
├── package.json                # npm config
├── readme.md                   # this file
└── webpack.config.js           # webpack config
```

### Dependencies
 - install npm
 - `npm i -g bower`

### Development
 - `git clone -b with-router https://github.com/dallrigo/re-actor.git`
 - `cd re-actor`
 - `npm install`

### Scripts
 - `npm start`
 - `npm run build`
 - `npm run preview`