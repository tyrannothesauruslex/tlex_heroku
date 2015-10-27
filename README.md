# php-getting-started

A barebones PHP app that makes use of the [Silex](http://silex.sensiolabs.org/) web framework, which can easily be deployed to Heroku.

This application supports the [Getting Started with PHP on Heroku](https://devcenter.heroku.com/articles/getting-started-with-php) article - check it out.

## Running Locally

Make sure you have PHP, Apache and Composer installed.  Also, install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

```sh
$ git clone git@github.com:heroku/php-getting-started.git # or clone your own fork
$ cd php-getting-started
$ composer update
$ foreman start web
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

## Documentation

For more information about using PHP on Heroku, see these Dev Center articles:

- [PHP on Heroku](https://devcenter.heroku.com/categories/php)


## TODO


    * debug on android
    * rotate-able (drafty)
    * android fonts
    * bridge colors
    * pencil to change fonts?
    * palette to change colors? (nein, one for both)
    * odes
    * canon
    * (un)logins / comments
    * manifetish
    * tags (neologism, positive, negative, portmanteau, pretentious, foreign)
    * favorites
    * how-to: simulate typing
    * css for definitions
    * song lyrics


