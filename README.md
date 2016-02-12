![image_squidhome@2x.png](http://i.imgur.com/RIvu9.png)

# sails-generate-gulp

A gulp generator for Sails.js to replace default Grunt tasks.

## Installation

```sh
$ npm install sails-generate-gulp
```

It can be used in combination with [sails-generate-override-new](https://github.com/groupe-sii/sails-generate-override-new) to automatically generate gulp tasks at sails project creation:

```sh
$ npm install sails-generate-gulp
```

If not, you will just create the Gulp tasks and they wont replace the default Grunt tasks.

## .sailsrc

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

With [sails-generate-override-new](https://github.com/groupe-sii/sails-generate-override-new) :

```json
{
    "generators": {
        "modules": {
            "gulp": "sails-generate-override-new",
            "gulp": "sails-generate-gulp",
        }
    }
}
```

## Usage

### Default

It will just create the **/tasks** folder

```sh
sails generate gulp
```

### With sails-generate-new

It will also remove the default Grunt tasks and launch the Gulp ones at sails lift.

```sh
sails new <project name>
```

## License

The sails-generate-gulp module is released under the ICS license.

https://github.com/groupe-sii/sails-generate-gulp/blob/master/LICENSE
