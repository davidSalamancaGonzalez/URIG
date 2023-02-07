
# URIG

URIG (Unsplash Random Images Generator) is a web application capable of generating a gallery of 30 random images that are regenerated when a button is pressed. The images come from the Unsplash API.

When you pass the cursor over an image, a small fade effect is created, at which time the profile photo and the user's name appear at the bottom.

When clicking on any image, a dialog window appears with the photograph and several options:

- Close the dialog window.
- Download Photo (Opens in a different tab than the current one)
- Give a like

You can see it at the following link:
[[URIG](https:://shorturl.at/akr67)]


## Structure

URIG is made up of two modules, a main one, called App.module, which contains the Gallery (the main page of the project) and Card (Gallery's child component) components.

The second is called Shared.module and contains the header and the models (typescript interface for the api response), this module is designed in case the application tends to expand a lot, have all the components we want share in a centralized one.

The last element that remains is a service called photo-collection-service and that contains the logic to call the API, in this case with a GET method and provides the Gallery with the Unsplash images.

## API Reference

#### Get all items

```
 https://api.unsplash.com/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `photos` | `string` | Api route to get photos  |
| `random?count=30 ` | `string` | Number of random photos  |
| `access_key` | `string` | **Required**. Your API key |




## Tech Stack

HTML5 - CSS - ANGULAR 14.1.3 - NODE 16.15.1 - BOOTSTRAP 5.2 - BOOTSTRAP ICONS - GOOGLE FONTS




## Usage

If you want to make changes or improvements, you can fork the repository and follow the steps below.

Run npm install and after the installation, run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.



## Code quality

[![CodeFactor](https://www.codefactor.io/repository/github/davidsalamancagonzalez/nuwevueling/badge)](https://www.codefactor.io/repository/github/davidsalamancagonzalez/nuwevueling)
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@davidSalamancaGonzalez](https://github.com/davidSalamancaGonzalez)

