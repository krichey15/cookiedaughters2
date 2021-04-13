<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

<h1 align="center">
  <br/>
  Cookie Daughters Website
</h1>

## Site colors:

#d0edd9
#9ad3c2
#ebd9c3
#fffbf0
#441d0c
#fff
#000

## 💎 Features

- Cart
- Product grid
- Product page
- Dynamic Inventory Checking
- Image optimization with Gatsby Image
- Styled Components with Emotion
- Google Analytics
- SEO

### 📦 Dynamic Inventory Checking

The Shopify product inventory is being checked in realtime, therefore no rebuilding and redeploy is needed when a product goes out of stock. This avoids problems where products could still be available even though they're out of stock due to redeploy delay.

### 🖌 Styling

I'm using [Emotion](https://emotion.sh/docs/introduction) as styled components library.

## ⚠️ Common problems

- You need to use the Shopify Storefront API credentials not the regular Shopify API.
- You need to have at least one published product on Shopify.

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your site’s directory and start it up.

    ```sh
    cd my-shopify-store/
    gatsby develop
    ```

2.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-shopify-store` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

3.  **Connect your own Shopify store.**

    Open both `.env` files located in the root directory of your page end replace the credentials with your own. Don't forget to restart Gatsby for your store to be loaded!

    ⚠️ Make sure to use the Shopify storefront API credentials, not the regular Shopify API!

## Deploy

Deployed using Netlify
Hosted by GoDaddy

## Form

The form is being validated using Netlify and being sent to client using Zapier.

## Photos

-- For best results Product Photos should square and at least 100px X 100px.

Other image sizes:
-Home Page Banner: 1500 x 720px (However this can be any height. 1500px width can change but it won't look as good.)
-Announcement Banner: 1500 x 100px (This Banner is added through the Flickr API which is set up to display the most recent new photo added to the photostream. Used Zapier to watch for this.)
-
