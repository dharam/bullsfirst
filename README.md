# bullsfirst

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

##Changes
 
###HTML
	Added initial-scale attribute value to the head section with a value of 1.
	Divided the markup into common views `nav.html` and `accounts.html` for better modularity.

###Directory structure
	Made the directory structure more managable separating out the concerns from app level to standalone.

	1. bullsfirst
		1. app
			1. images - For saving image assets
				1. <section> - For saving non-shareable assets
				2. common - For saving common assets
			2. scripts - top level directory for saving JS code
				1. components - contains all reusable and shared code 
					1. constants 	- constants to be used throughout the app
					2. directives 	- directives
					3. filters 		- filters
					4. services - services to be consumed throughout
				2. src - source of individual sections
					1. <section-name> - Eg accounts, portfolio, trade etc
			3. styles - App wide styles
				1. <section-name> - Section specific styles
				2. common - common styles used throughout broken down further 
					1. buttons.scss - Styles for buttons and other iconography
					2. colors.scss 	- Color definitions for the website
					3. fonts.scss 	- Font definitions and auto-generated classes
					4. header.scss 	- Styles for common header
					5. layout-classes.scss - Layout generating classes
					6. margins.scss - Autogenerated classes for margins
					7. paddings.scss- Autogenerated classes for paddings
					8. mixins.scss 	- mixins for reusble components
					9. rollup.scss  - A rollup of all common .scss files
				3. main.scss - main scss file for the app

			4. views - top level folder for the views
				1. common - reusable views 
			etc.
		2. test - top level container for tests
			1.spec - actual tests
				1. controllers - tests for controllers
				2. directives - tests for directives
				3. services - tests for services
				etc
		3. config files like `bowerrc`,`editorconfig`,`gitignore`, `jscsrc`, `jshintrc`,`yo-rc`.
		4. Gruntfile.js - for configuring tasks to run, build and test the app
		5. package.json - package file for managing dependencies
		6. bower.json - package file
###Code fixes
	* Encapsulated JS code within an IIFE to avoid polluting global scope
	* Used 'strict' mode for JS 
	* Used **jshint** to maintain a standard coding style
	* Used inbuilt prototype algorithms like forEach() to make code cleaner
	* Moved individual section specific routing to individual folders making the routing easier to manage
	* Used bindings to the controller object rather than the local $scope
	* TODO : For building the app, add ngAnnotate for buildtime DI
	* Used `controllerAs` alias to refer to the view as is the recommended practice.
	* TODO : Moving constant declaration into individual declarations under `constants` folder
	* TODO : Creating directives for reusable components
	* TODO : Create filters for manipulating data

###CSS fixes
	* Separated CSS into manageable and modular sections
	* Used auto-generated classes to standardise layout 
	* Used SASS to make the CSS cleaner and avoid redundancy
	* Used SASS variables to make theming possible easily
	* Used Bootstrap SVGs for icons making the page faster
	* TODO : remove all the hardcoded values existing in the styles and move to variables
	* TODO : Add bootstrap classes to make the layout responsive on all devices

###Tests
	* Used Karma, Jasmine for writing unit tests
	* TODO : write e2e tests in protractor



 

