![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-gulp

A Gulp generator for Sails.js to replace default Grunt tasks.

## Prerequisites

First, you will need to generate a sails application.

```sh
$ npm i sails -g
$ sails new <project-name> # Please stop the automatic `npm install` command before it installs sails dependencies and Grunt with it
$ cd <project-name>
```

## Installation

```sh
$ npm install sails-generate-gulp
```

## How to use ?

A .sailsrc file needs to be added to the working directory with the following:

```json
{
    "generators": {
        "modules": {
            "gulp": "sails-generate-gulp",
        }
    }
}
```

Then launch:

```sh
$ sails generate gulp
$ npm install # To install newly added dependencies
```

## What is it doing ?

It Will:

* Remove the `Gruntfile.js`
* Remove all Grunt tasks under `tasks/` folder
* Create the `gulpfile.js` to manage Gulp tasks
* Create a whole new `tasks/` folder with Gulp tasks
* Update `.sailsrc` to disable grunt
* Update `package.json` to remove old grunt dependencies
* Update `package.json` to add gulp dependencies
* Create a default SASS architecture under `/assets/styles`

## License

The sails-generate-gulp module is released under the ICS license.

https://github.com/groupe-sii/sails-generate-gulp/blob/master/LICENSE
