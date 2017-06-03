# Grav Cookies Age Verification Plugin

Grav plugin displays modal on page load about age verification for adult sites (eg: alcohol, toboacco, etc...).

# Installation

To install this plugin, just download files and copy to `/your/site/grav/user/plugins/ageverification`. Remember you need to c create the folder `ageverification` under `/your/site/grav/user/plugins`.

# Usage

The Cookies Age Verification  plugin contains template `ageverification.html.twig`, when the plugin is initialized template is rendered and is assigned to the variable `ageverification_markup`.

To run the script on your site, just call the variable `{{ ageverification_markup }}` in template before the body close tag. E.g. in `/your/site/grav/user/themes/themename/templates/partials/base.html.twig`.

# Features

-   On/Off loading jQuery Cookie plugin for some reasons.
-   Ability to load your custom CSS files.
-   Multi Language support (currently translations are in English, Romanian).

# Configuration

To adjust the plugin, you have to copy the `ageverification.yaml` file into this direction `/your/site/grav/user/config/plugins`. If this folder doesn't exist, you have to create it manually.
