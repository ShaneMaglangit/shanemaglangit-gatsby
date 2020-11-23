> Note: Future updates will be committed in a private repository but the live site will stay up-to-date
## Live site :rocket:

The live site can be found [here](https://www.shanemaglangit.com/)

## Rebuild locally :hammer:

1. **Install Gatsby CLI**

Use the following command to install gatsby-cli. This requires you to have Node.js pre-installed on your device.
```bash
npm install -g gatsby-cli
```

2. **Clone the project**

Run the following command to create a clone of the project
```bash
git clone https://github.com/ShaneMaglangit/shanemaglangit-gatsby.git
cd shanemaglangit-gatsby
```

3. **Set up the project**

Once you have a working clone of the project, you may use the following command install the necessary dependencies.
```bash
npm install
```

4. **Set up the Strapi Headless CMS**

This site uses Strapi as its CMS. Read the [getting started with gatsby](https://strapi.io/documentation/v3.x/getting-started/gatsby.html) as your guide on setting it up.

Here are the structure of the collections

**Projects**
```
featured: Boolean
priority: Number
title: Text
description: Text
source: Text
ref: Text
category: Enum(software, website)
preview: Media
```
**Testimonials**
```
name: Text
company: Text
message: Text
```

5. **Add Google Analytics ID**

To have the project running, it is necessary to put your own GA trackig ID under gatsby-config.js. Otherwise, you can remove it completely.

6. **Start the project**

To wrap things up, run the following command to start the project.
```bash
gatsby develop
```

Now you'll be all set to go. You may access the site through http://localhost:8000/.
