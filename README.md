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
    * First, duplicate and rename `/app/config/config.yml.dist` file in
    `/app/config/config.yml`
    * Change twitter_name variable in `/app/config/config.yml` file _(line 15)_
    * Change metas robots in `/app/config/config.yml` file _(line 16)_
    * Change mail options password variable of mail client in
    `/app/config/config.yml` file _(line 348)_
    * In `/app/resources/front/package.json` file, replace `socle` namespace
    by the good values of your new theme
    * In `/app/resources/front/config.json` file, change the theme namespace,
    replace `socle` by the name of your new theme
    * In `/public/theme/{project}/system/config.js` file, change the theme
    namespace, replace `socle` by the name of your new theme
    * For the test of sending emails, please follow this link : `https://github.com/bolt/boltforms/blob/master/doc/email.md` or `https://bolt.github.io/boltforms/email.html`


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
1. Ampps
  * In Ampps web server, You should be manage domains :
    * In http://localhost/ampps/, go to `Add domain` and type the following
      commands in the corresponding fields:
      * Domain : `dev.{project}`
      * Domain Path : `/Users/{username}/Documents/{workspace}/{project}/public`
2. Bolt
  * To start the install just run the following in the root folder.
    * `composer require bolt/bolt ^3.4`
  * After the packages have downloaded, you can go to http://dev.{project} and
    follow the instructions
  * More informations at http://docs.bolt.cm/
  * Extensions installed :
  * boltforms (custom forms)
  * minify-html (html minifier when debug mode is at false)
  * Sitemap
  * Robots.txt
3. Bolt Update
  * To run Bolt upgrading, Go to `composer.json` file and change the Bolt CM version.
  * Then, in your terminal, just copy the following command on the root folder :
    * `composer update`
4. Front
  * Place to `/app/resources/front` on your terminal
  * After install and configure nodeJS and npm, run the following commands :
    * `npm install` will install the packages listed in `package.json` file
    * `gulp develop` to run project in debug mode
    * `gulp img-optimization` to rebuild images optimization
    * `gulp releasePatch` to run project in production mode and release project
      with patch modification version
    * `gulp releaseMinor` to run project in production mode and release project
      with minor modification version
    * `gulp releaseMajor` to run project in production mode and release project
      with major modification version


Deploy procedure
--------------
***
  * Just need to transfer the project folder to the root of your web server.
