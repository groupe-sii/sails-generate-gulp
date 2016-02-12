![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-gulp

A gulp generator for Sails.js to replace default Grunt tasks.

## Installation

```sh
$ npm install sails-generate-override-new
$ npm install sails-generate-gulp
```

## .sailsrc

A .sailsrc file needs to be added to the working directory with the following:

```json
{
    "generators": {
        "modules": {
            "override-new": "sails-generate-override-new",
            "gulp": "sails-generate-gulp",
        }
    }
}
```

## Usage

```sh
sails new <project name>
```

## License

The sails-generate-gulp module is released under the ICS license.

https://github.com/groupe-sii/sails-generate-gulp/blob/master/LICENSE
