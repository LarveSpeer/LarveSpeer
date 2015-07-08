# LarveSpeer ![](https://travis-ci.org/LarveSpeer/LarveSpeer.svg?branch=master) [![Code Climate](https://codeclimate.com/github/LarveSpeer/LarveSpeer/badges/gpa.svg)](https://codeclimate.com/github/LarveSpeer/LarveSpeer)


## TODO

- More Plugins
    - Math plugin
        - http://www.mathjax.org
    - Table Plugin (Scroll??)
- Implement API for multiple clicks in one slide
- Backend GUI (/moderator) improvements
    - next slide
- Make LarveSpeer a module, which can be used in an presentation module
    - config
    - Presentaion folder
    - myPresentation.js
        - LarveSpeer
            - Plugins
            - ...
- Tagging Concept
    - Modules return html/ less for given Tag
        - Modular design (multiple moderator monitors etc.)
        - "default" Tag for default content

## First Steps

### Clone & Install
````shell
# clone master repo
git clone git@github.com:LarveSpeer/LarveSpeer.git
cd LarveSpeer

# install dependencies
npm install
````

### Create Content

The main configuration is done in the `config.js` file. There you define a path to a `presentationPath` and the order of the pages by using the name of the slide folder.

In the presentation folder exists a folder for each slide. In the slide folder is a `config.js` file, where you define the plugin npm name and additional plugin configuration.


## Using

### Moderator
The **Moderator monitor** contains the moderator notes and is available under
`/moderator`.

### Remote Presenation Control
You can navigate remotely to all connected clients using the **presentationKey**. It can be configured under `config.presentation`.
All clients, who send this key as a **GET** Parameter (`/?pk=myPresentationKey` or `/moderator?pk=myPresentationKey`) are authenticated.



## API

### express
Every plugin should return an (modified) express instance which will be available under `/slide/<uuid>`.

### html()
Returns the rendered HTML

### less()
Returns LESS which only affects the instances HTML.
