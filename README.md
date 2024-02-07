# SFCC ModBackend Code Modularity Showcase Repository

This repo aims to provide example for the following modularity concepts:

[x] - Extending Scripts

To see extending scripts, check scripts/checkout/checkoutHelpers 

placeOrder method extended on app_x_brand, int_x_product from app_storefront_base cartridge


[] - Extending models

[] - Extending controllers

[] - Extending hooks

[] - Extending job steps

Repo does not include storefront-reference-architecture cartridges if you want to play with it, make sure to include them

## Site cartridge path:

plugin_x_tool:app_x_brand:int_x_product:app_storefront_base

## BM cartridge path:

int_x_product:bm_x_brand:bm_app_storefront_base

## Disclaimer

This repository extends the Storefront Reference Architecture source code ("Source Code") provided by salesforce.com, inc. ("SFDC"). Please note that this Source Code is subject to the terms and conditions outlined in the license.txt file available in the SFRA repository. https://github.com/SalesforceCommerceCloud/storefront-reference-architecture/blob/master/license.txt

The purpose of this repository is to provide an example of how to extend the SFRA codebase in a modular way. This repository is not intended to be used as a starting point for a new SFRA implementation.
