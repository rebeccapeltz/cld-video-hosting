# Hosting Video on a Jam Stack Web Page

This uses Next.js and React components to host HTML5 Video Embed element and Cloudinary Video Player
to host video on a web page.  The HTML5 Video Embed element is created by the Cloudinary
React Video Component.


## Deploy to Netlify

https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/

```bash
ntl init
```


## Chrome Dev tools Media Player Panel

https://developer.chrome.com/docs/devtools/media-panel/

## Netlify functions
Test locally
```bash
netlify dev
```

Locate where functions server is running 

http://localhost:{functions server port}/.netlify/functions/test

To test:
postman: body raw {"name":"becky"}