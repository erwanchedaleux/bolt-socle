Bolt Socle
========================

Features
--------------
***
  * Bolt CMS
  * Front-End architecture with `Gulp` task runner and `npm` package manager


Specifications
--------------
***
  * Don't follow to :
    * First, duplicate and rename `/app/config/config.yml.dist` file in `/app/config/config.yml`
    * Change twitter_name variable in `/app/config/config.yml` file _(line 15)_
    * Change mats robots in `/app/config/config.yml` file _(line 16)_
    * Change mailoptions password variable of mail client in `/app/config/config.yml` file _(line 348)_


Instances
--------------
***
**Production env**
  * [Site](http://)
  * [PHPMyAdmin](https://)


Internal(s) Contact(s)
--------------
***
1. **Functional**
  * [Erwan CHEDALEUX](mailto:erwan.chedaleux@gmail.com)

2. **Technical**
  * [Erwan CHEDALEUX](mailto:erwan.chedaleux@gmail.com)


Install procedure
--------------
***
1. bolt
  * To start the install just run the following command replacing the project with
  the name you want to use.
    * `composer create-project bolt/composer-install:^3.3@beta <MYPROJECT> --prefer-dist`
  * After the packages have downloaded, you can choose whether you would like a
  separate public directory and if so choose a name.
  * More informations at http://docs.bolt.cm/
  * Extensions
    * boltforms
    * minify-html
2. Front
  * Place to `/app/resources/front` on your terminal
  * After install and configure nodeJS and npm, run the following commands :
    * `npm install` will install the packages listed in `package.json` file
    * `gulp develop` to run project in debug mode
    * `gulp img-optimization` to rebuild images optimization
    * `gulp releasePatch` to run project in production mode and release project with patch modification version
    * `gulp releaseMinor` to run project in production mode and release project with minor modification version
    * `gulp releaseMajor` to run project in production mode and release project with major modification version


Deploy procedure
--------------
***
  * Just need to transfer the project folder to the root of your web server.
