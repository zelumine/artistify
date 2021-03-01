# Artistify Workshop

This group workshop will walk you through the steps to create a fullstack application.  
Artistify is a **CRUD** application where users are separated in 2 roles :
- admin (logged in users)
- visitor

**Admin users** can **C**reate, **R**ead, **U**pdate and **D**elete resources in a database:
- artists
- labels (records company)
- styles (music genres)
- albums

**Visitor users** can browse/search the collection and comment on artists/album pages.

We will also implement other cool features:

- image upload
- signup/signin/signout
- form validation
- flash messages
- route protection via custom middlewares
- custom hbs helpers
- simple search engine
- AJAX widget(s)

**Work as a team, communicate, splits tasks, avoid git conflicts !**
<br/>

![alt text][intro]

[intro]: https://media.giphy.com/media/3o72EX5QZ9N9d51dqo/giphy.gif "dj cats"




---

## Day I - Mission C.R.U.D (end @ 13h00)

Today, we will focus on the CRUD part : let's start coding the dashboard !

This group of pages represents the admin section of Artistify.  
For this early developement phase, we won't protect the dashboard : the signup/signin will come later.

**Don't worry** if you can't finish all the steps : you will get a soluce proposal.

**Do your best : Happy hacking !**

---

### Todos

- repo forking/cloning + git collaboration settings
- setup .gitignore
- setup .env
    - PORT 
    - MONGO_URI = mongodb://localhost/artistify
    - CLOUDINARY_NAME
    - CLOUDINARY_KEY
    - CLOUDINARY_SECRET
- install required dependencies
- write package.json dev script
- connect your database
- create a seed file for each resource type
- code separated routers setup
- **CRUD artists / labels / styles** (recommended order: Read (if you have a seed file) / Delete / Create / Update)
- views: create the dashboard pages (more details below)
- implement image upload for artists and labels
- **_Advice_** : code some **basic** styling first, improve **later**

---

### Base routes

The base router is located in /routes/index.js .

| Route         | HTTP | View                | Description                 |
| ------------- | ---- | ------------------- | --------------------------- |
| `/`           | GET  | index.hbs           | Display home page           |
| `/dashboard ` | GET  | dashboard/index.hbs | Display dashboard main page |

<br/>

Below, an image of the dashboard main page.  
For each resource type (artist, label, style), 2 views are linked :
- one form to insert new resources in database
- one table listing all documents
    - one update link per line
    - one delete link per line (linked to a view with an update form)

<br/>

![alt text][dashboard]

[dashboard]: https://res.cloudinary.com/gdaconcept/image/upload/v1614557076/workshop-artistify/workshop-artistify-day-1-dashboard_hxmowm.png "Dashboard main page"

---

### Artists Dashboard

The Artist model should be located in /models/Artist.js

The Artist model must have the following properties :

- name - String - unique
- isBand - Boolean
- description - String
- picture - String (default: https://res.cloudinary.com/gdaconcept/image/upload/v1614550771/workshop-artistify/no-image-logo_dcufai.png)

The artist router should be located in /routes/artist.js .  
All those routes are **prefixed** with /dashboard/artist/  

<br/>
Here is a routes description:

| Route         | HTTP | View                       | Description                                          |
| ------------- | ---- | -------------------------- | ---------------------------------------------------- |
| `/`           | GET  | dashboard/artists.hbs      | Show all artists in a dashboard table                |
| `/create `    | GET  | dashboard/artistCreate.hbs | Display artist create form                           |
| `/update/:id` | GET  | dashboard/artistUpdate.hbs | Display artist update form                           |
| `/delete/:id` | GET  | none                       | Delete one artist and redirect to /dashboard/artists |
| `/`           | POST | none                       | Create one artist and redirect to /dashboard/artists |
| `/:id`        | POST | none                       | Update one artist and redirect to /dashboard/artists |

<br/>

Below, an overview of the artists table.

<br/>

![alt text][artists]

[artists]: https://res.cloudinary.com/gdaconcept/image/upload/v1614557080/workshop-artistify/workshop-artistify-day-1-artist_t5vujf.png "all artists table"

---

### Labels Dashboard

The Label model should be located in /models/Label.js

The Label model must have the following properties :

- name - String - unique
- city - String
- country - String
- street - String,
- streetNumber - Number
- zipcode - String
- logo - String (default:https://cdn6.aptoide.com/imgs/1/4/c/14c166cc3cd2cac8da4809024ba82d0e_icon.png)

The label router should be located in /routes/label.js .
All those routes are **prefixed** with /dashboard/label/
<br/>
Here is a routes description:

| Route         | HTTP | View                      | Description                                       |
| ------------- | ---- | ------------------------- | ------------------------------------------------- |
| `/`           | GET  | dashboard/labels.hbs      | Show all labels in a dashboard table              |
| `/create `    | GET  | dashboard/labelCreate.hbs | Display label create form                         |
| `/update/:id` | GET  | dashboard/labelUpdate.hbs | Display label update form                         |
| `/delete/:id` | GET  | none                      | Delete one label and redirect to /dashboard/label |
| `/`           | POST | none                      | Create one label and redirect to /dashboard/label |
| `/:id`        | POST | none                      | Update one label and redirect to /dashboard/label |

<br/>

Below, an overview of the labels table.

<br/>

![alt text][labels]

[labels]: https://res.cloudinary.com/gdaconcept/image/upload/v1614557079/workshop-artistify/workshop-artistify-day-1-dashboard-label_qfob7u.png "all labels table"

---

### Styles Dashboard

The Label model should be located in /models/Style.js  
The Label model must have the following properties :

- name - String - unique
- color - String (default: #000)
- wikiURL - String

The style router should be located is /routes/style.js .
All those routes are **prefixed** with /dashboard/style/
<br/>
Here is a routes description:

| Route         | HTTP | View                      | Description                                       |
| ------------- | ---- | ------------------------- | ------------------------------------------------- |
| `/`           | GET  | dashboard/styles.hbs      | Show all styles in a dashboard table              |
| `/create `    | GET  | dashboard/styleCreate.hbs | Display style create form                         |
| `/update/:id` | GET  | dashboard/styleUpdate.hbs | Display style update form                         |
| `/delete/:id` | GET  | none                      | Delete one style and redirect to /dashboard/style |
| `/`           | POST | none                      | Create one style and redirect to /dashboard/style |
| `/:id`        | POST | none                      | Update one style and redirect to /dashboard/style |

<br/>

Below, an overview of the styles table.

<br/>

![alt text][styles]

[styles]: https://res.cloudinary.com/gdaconcept/image/upload/v1614557078/workshop-artistify/workshop-artistify-day-1-dashboard-style_hb6tkx.png "all styles table"

---

Done already ? Congratz !  


![alt text][congratz]

[congratz]: https://media.giphy.com/media/111ebonMs90YLu/giphy.gif "all done"



You may want to try to improve this really basic design, or implement a feature of your choice.

