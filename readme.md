# Re-actor

It's a basic boilerplate for `React`. No routes, no flux, no nothing. Just plain React.

Webpack to do stuff there. Has `babel` watching everything and `sass|scss` support.

Properly builds stuff over `build`.

### Tree
```shell
.
├── /bower_components/          # stuff from bower
├── /build/                     # compressed files after build task
│   ├── /images/                # images
│   ├── /scripts/               # js
│   ├── /styles/                # css
│   └── ...                     # index.html, favicon.ico, ...
├── /config/                    # webpack/server config
│   ├── cert.pem                # for https
│   ├── dev.config.js           # development config for webpack
│   ├── key.pem                 # for https
│   └── prod.config.js          # production config for webpack
├── /node_modules/              # stuff from npm
├── /source/                    # stuff to work on
│   ├── /components/            # react components
│   ├── /images/                # images to be required in css/html/js
│   ├── /layouts/               # react component that will wrap the application
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
 - clone me
 - `npm install`

### Scripts
 - `npm start`
 - `npm run build`
 - `npm run preview`
 - always serving @ [http://localhost:8080](http://localhost:8080)