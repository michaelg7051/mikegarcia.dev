# 👋 Hello developer!

This template is beautifully designed and organized, with a clean and user-friendly layout. It utilizes flex containers for effortless positioning and employs SVG backgrounds to create a visually appealing and unique transition between sections. The contact form has implemented reCAPTCHA functionality for greater security, making it easy for visitors to reach out and communicate with you. Overall, a great website that effectively showcases your offerings.

This project serves as an example of what can be achieved. It is not a fully functional product. Feel free to use the source code and ideas as a starting point for your own projects.

This is only one of the many templates available from W3Schools. Check our [tutorials for frontend development](https://www.w3schools.com/where_to_start.asp) to learn the basics of [HTML](https://www.w3schools.com/html/default.asp), [CSS](https://www.w3schools.com/css/default.asp) and [JavaScript](https://www.w3schools.com/js/default.asp). 🦄

## Knowledge requirements

To be able to fully understand and modify this template to your needs, there are several things you should know (or learn):

- [HTML](https://www.w3schools.com/html/default.asp)
- [CSS](https://www.w3schools.com/css/default.asp)
- [Sass](https://sass-lang.com/)
- [JavaScript](https://www.w3schools.com/js/default.asp)
- [React](https://reactjs.org/)
- [Node.js](https://www.w3schools.com/nodejs/default.asp)
- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/docs.html)
- [Google reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)

## 🔨 What's next?

Customize this template to make it your own.  
Remember to make your layout responsive - if you want your site to look good on smaller screens like mobile.

## 🎨 Where to find everything?

This template is made by using several technologies.  
Below are explanations about where to find specific code.

Public resources are found in the folder `public`.

Data is stored in your admin console.

### Root HTML

There are two important HTML files in this project which are the root pages around the application. It is a bit different from a default React project as you in this case have two. One in root folder and one in `public`. The reason for this is that one is rendered before the other.

### CSS and images

The CSS in this project is of type Sass which is a CSS framework. You can read more using the link provided in Knowledge requirements. You can find the sass files together with the components in `client/src/components/` and there is one main sass file located on the top level `client/src/index.scss`. 

### Application

You can find the core frontend React application in `client/src`. Here you have a normal React setup with `index.js` as the glue that pieces the `.jsx` components together with the HTML. You will have to know React to use this template.

### Backend

The backend work is in `server/`. 
Database queries in `server/db/index.js`.
APIs in `server/index.js`.

### Database

Dynamic spaces can use [SQLite](https://www.sqlite.org/docs.html) database.  
The database file is called `database.db`. It is placed inside the `w3s-dynamic-storage` folder.  
SQLite connection path to the database is `w3s-dynamic-storage/database.db` which you can use to connect to the SQLite database programmatically.   
Database creation, queries, and database connection can be found in `db/index.js`.

---  
**Do not change the `w3s-dynamic-storage` folder name or `database.db` file name!**  
**By changing the `w3s-dynamic-storage` folder name or `database.db` file name, you risk the space not working properly.**

## Google reCAPTCHA v3

In order to make use of this template, it is necessary to generate your own SITE key and SECRET key for Google reCAPTCHA and integrate them into the template.

To do so, it is recommended to first familiarize yourself with the [Google reCAPTCHA v3 documentation](https://developers.google.com/recaptcha/docs/v3). 
Next, access the [Google reCAPTCHA admin site](https://www.google.com/recaptcha/admin). Here, you may be prompted to log in if you have not done so previously.

#### Label

The label serves as a name or alias for your set of keys.

#### reCAPTCHA Type

Choose "reCAPTCHA v3" from the options. This version is considered to be the most current and effective.

#### Domains

Enter your website domain, for example: `your-space-id.w3spaces.com`.

#### Form Submission

Read and accept the reCAPTCHA Terms of Service and submit the form.
Once the form is submitted, you should be able to view your set of keys, which should then be added to your environment variables.

#### Key Integration

Access the settings by clicking on the gear icon in the upper right corner. 
**Please note:** These settings are not be available on mobile devices. To access them, you need to enable desktop mode in your browser settings.
In the Environment tab, update the value for `RECAPTCHA_SECRET_KEY`. Then go to `client/src/config.js` and add the `RECAPTCHA_SITE_KEY`

If at any point, you wish to deactivate reCAPTCHA, it is possible to do so by making necessary changes in the code.

## 🔨 Please note
For now files created/uploaded or edited from within the terminal view will not be backed up or synced. 

## ⛑ Need support?
[Join our Discord community](https://discord.gg/6Z7UaRbUQM) and ask questions in the **#spaces-general** channel to get your space on the next level.  
[Send us a ticket](https://support.w3schools.com/hc/en-gb) if you have any technical issues with Spaces.

Happy learning!