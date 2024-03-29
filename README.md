# :zap: Next Tailwind Optimised

* A Next/Tailwind SSR app that displays data & images from an API with perfect Lighthouse scores
* This is a template for a portfolio website (Work in progress)
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/next-tailwind-optimised?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/next-tailwind-optimised?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/next-tailwind-optimised?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/next-tailwind-optimised?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Next Tailwind Optimised](#zap-next-tailwind-optimised)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General Info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General Info

* Next.js used for frontend is for server-rendered react apps. It has automatic code splitting, simple page-based routing, built-in CSS support and hot reloading.
* Tailwind CSS added to Next.js
* Latest Next/Image optimisation used so image downloaded as Webp format and automatically sized. This is a major advantage over non-optimised Images. Working for datalist page but not used for News API page as all sources have to be added to `next.config.js`
* Converted to Progressive Web App (PWA).
* [Custom `Document`](https://nextjs.org/docs/advanced-features/custom-document) file `./pages/_document.js` created to override and extend default `Document`. It injects meta tags into every page

## :camera: Screenshots

![Example screenshot](./imgs/list.png)
![Example screenshot](./imgs/card.png)

## :signal_strength: Technologies

* [React v17](https://reactjs.org/) Javascript library.
* [React icons v4](https://www.npmjs.com/package/react-icons)
* [Next v12](https://nextjs.org/) minimalist framework for rendering react apps on the server.
* [Tailwind CSS v3](https://tailwindcss.com/) utility-first CSS framework
* [PostCSS v8](https://postcss.org/) tool for transforming CSS with JavaScript
* [Vercel](https://vercel.com) site hosting
* [pngTree](https://pngtree.com/) downloadable images, png etc.
* [pwa-asset-generator v4](https://www.npmjs.com/package/pwa-asset-generator) Automated PWA asset generation and image declaration. Creates icons and JSON array for PWA manifest.json file

## :floppy_disk: Setup

* `npm run dev` runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* `npm run build` builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.
* `npm run start` to run the built app.

## :computer: Code Examples

* tba

```javascript

```

## :clipboard: Status & To-Do List

* Status: In work
* To-Do: Complete

## :clap: Inspiration

* [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
* [Convert your website into a PWA in 8 simple steps](https://milindsoorya.site/blog/convert-your-website-into-a-pwa-in-8-simple-steps-next-js-pwa-series-part-2#step-6-edit-your-_documentjs-file)
* [How to Deploy Next.js Sites to Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
