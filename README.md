# LarveSpeer ![](https://travis-ci.org/LarveSpeer/LarveSpeer.svg?branch=master) [![Code Climate](https://codeclimate.com/github/LarveSpeer/LarveSpeer/badges/gpa.svg)](https://codeclimate.com/github/LarveSpeer/LarveSpeer)


## Goals
- Framework to simplify creating presentations
- Modular and hackable to the ground
- Full texted based configuration
- Simple solution to sync all clients (socket.io)
- Per user configurations for the instance (theme, settings, etc.)
- Full Feature API for Slide modules




## TODO

Topic 		| Description
 ---- 		| ----
Plugins 	| Math (http://www.mathjax.org)
 			| Media (Audio/ Video/ Image)
 			|
Module API	| Event functions to trigger stuff like play/ pause to all clients
			| Slide Fragments API (next and prev function with callback)
			|
GUI 		| UserConfig (Clientside settings frontend for Theme and module configs)
			|




## Features & Config

### Create Content
The main configuration is done in the `config.js` file. There you define a path to a `presentationPath` and the order of the pages by using the name of the slide folder.
In the presentation folder exists a folder for each slide. In the slide folder is a `config.js` file, where you define the plugin npm name and additional plugin configuration.


### Moderator (TODO)
The **Moderator monitor** contains the moderator notes and is available under
`/moderator`.

### Remote Presenation Control
You can push your navigation to all connected clients using the **presentationKey**. It can be configured under `config.presentation`.
All clients, who send this key as a **GET** Parameter (`?pk=myPresentationKey`) are authenticated and able to push.




## Module API

The presentation content if provided by modules, which always return HTML and LESS. For example, the **LarveSpeer-markdown** module renders a markdown file to HTML and gives it to the LarveSpeer core.

Every module should return an (modified) express instance which will be available under `./slide/<uuid>`.


### Server
Method 				| Type			| Description
 ----  				| ---- 			| ----
html(userConfig) 	| userConfig 	| userConfig object, for user module config (LarveSpeer-tags, etc.)
 					| return 		| HTML string
 					| 				| |
less(userConfig) 	| userConfig 	| userConfig object, for user module config (LarveSpeer-tags, etc.)
					| return 		| LESS string (only affects the own HTML)



### Client (TODO)
Method 				| Type			| Description
 ----  				| ---- 			| ----
| |





## Licence

LarveSpeer is distributed under the GNU General Public License, see the LICENSE file for more details.

Framework 	| Licence
 ---- 		| ----
reveal.js 	| Copyright (C) 2015 Hakim El Hattab, http://hakim.se

(all used frameworks are marked with there licence)
