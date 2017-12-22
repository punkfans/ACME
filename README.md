#ACME PAGE

Author: Yuyang Wang (stevenyuyang@gmail.com / github.com/punkfans/ACME)

In the search page, you can filter the items by either typing something in the input area
or click one of the categories. When there is no result showing, you will be suggested 
to create one yourself. Or you can click the create tab directly to create an item.

When you click edit on any of the item, you will be brought to the edit page.

There are only 6 items initially. You can add more by going to the create page.

## Getting Started
These instructions set the project up and running on your local 
machine for development and for prod.

### Prerequisites

* node and npm installed

* ruby installed for sass

### Installing

* Clone the project

* Install dependencies

```
npm install
```

* install sass [Having trouble installing?](http://sass-lang.com/install)
```
gem install sass
```

* build the app

```
gulp
```
for local development or

```
gulp -e prod
```

for production

* open browser and go to [http://localhost:8080/](http://localhost:8080/)

## Gulp task

* Have fun with the app

```
gulp
```

Build the app for local development without minification and with sourcemaps enabled


```
gulp -e prod
```

Build the app for prod, with minification and without sourcemaps