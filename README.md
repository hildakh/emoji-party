## <img src="https://github.com/user-attachments/assets/2b90b08b-ef73-4d82-a406-eb425367140c" width="40" height="40"> Emoji Party



A tool to **generate random combined emojis and automate emoji assignment for Notion pages** using the **[Emoji Kitchen API](https://emojikitchen.dev/)**, **[Notion](https://www.notion.com/)**, **[Make](https://make.com/)** and **[Vercel](https://vercel.com/)**

### <img src="https://github.com/user-attachments/assets/13bdc14f-da38-459f-9568-bd9cccd01729" width="40" height="40"> You can use it in 3 ways
- 🎲 **Generate a random emoji** and save it to a file.
- 📄 **Create new Notion pages** from the command line.
- 🔄 **Automate emoji assignment** for Notion pages via **Make.com & Vercel**.

---

### <img src="https://github.com/user-attachments/assets/a57e7c40-b76b-44d3-b71d-2ac15039bf20" width="40" height="40"> Installation & Setup

- Clone this repo

- Install dependencies
  - Run `yarn install`

- Set up environment variables
  - Use `.env.example` as reference
  - `NOTION_KEY` is your notion integration key. For more information please refer to the docs at https://developers.notion.com/docs/create-a-notion-integration
  - `NOTION_DATABASE_ID` is the id of the database where you will add new pages to. More info at http://developers.notion.com/reference/retrieve-a-database
  - `API_SECRET_KEY` is a random secret you need to set locally and on Vercel when you deploy the API

---

### <img src="https://github.com/user-attachments/assets/01d7595b-cc21-479b-b55c-02548efe2fb6" width="40" height="40"> How to use it

#### To generate a random combined emoji & save it as png
- Run `node scrape-emoji.js` from `client` folder
- The new emoji is saved in the output folder as `.png`

#### To create a new Notion page with title, content & icon (emoji)
- Run `node notion-page-generator.js --title="Your page title" --content="Some content"` from `client` folder to add a new page to your selected database. It comes with a random combined emoji!

#### To automate adding emojis to created & updated pages on Notion using [Make](https://www.make.com/en)
- Create a New Vercel Project from command line. `yarn run vercel` and create a new project.
- On [Vercel](https://vercel.com/) dashboard, select your new project, navigate to settings and set the environment variables
- From a terminal, run `yarn run vercel:deploy` to deploy your project
- To test your integration locally, run `yarn run vercel:dev` to start a local server. Make a cURL request to Vercel's local server
  ```
  curl -X POST "http://localhost:3000/api/update-page" \
  -H "Content-Type: application/json" \
  -H "api-secret-key: api-secret-key" \
  --data '{"pageId": "a-notion-page-id"}'
  ```
  Watch the page on Notion as it gets its new look

- To automate the process, go to [Make](https://www.make.com/en) and log in.
- Click "Create a new scenario".
- Click "Add Module" and select Notion. Select --> Watch Database Items.
- Set up Notion and Http request modules.

##### Set up Notion module
You can watch items on create or update. I have created two scenarios to watch both so a created or updated page with no emiji gets the update
<img width="939" alt="Screenshot 2025-01-29 at 8 53 51 PM" src="https://github.com/user-attachments/assets/7e8910eb-60b6-4421-b545-020cd5be713d" />

#### Set up http request module

<img width="1217" alt="Screenshot 2025-01-29 at 9 14 04 PM" src="https://github.com/user-attachments/assets/9e10e223-76b5-4356-b69c-dc01b5710b47" />
<img width="1097" alt="Screenshot 2025-01-29 at 8 58 27 PM" src="https://github.com/user-attachments/assets/17deea4e-6c9f-4781-8a00-9bc34b0821e0" />
<img width="1485" alt="Screenshot 2025-01-29 at 9 03 10 PM" src="https://github.com/user-attachments/assets/a4d79a2d-0c0b-4919-a358-165892099b1b" />


#### Set up filter for pages with no icons
<img width="875" alt="Screenshot 2025-01-29 at 9 15 27 PM" src="https://github.com/user-attachments/assets/ae3bdc33-0298-425d-8e0f-9c8090a5086f" />
<img width="978" alt="Screenshot 2025-01-29 at 8 56 53 PM" src="https://github.com/user-attachments/assets/c44bf8c7-7d13-407c-ad55-fd23dadd47cb" />
<img width="1130" alt="Screenshot 2025-01-29 at 9 06 30 PM" src="https://github.com/user-attachments/assets/68829b9f-7368-47d1-8ef3-62f631e480b3" />
<img width="1645" alt="Screenshot 2025-01-29 at 8 53 11 PM" src="https://github.com/user-attachments/assets/4947cd10-0e0e-45d6-b23a-f2660fba9374" />

#### Connect your Notion database to your integration and Make
  <img width="1714" alt="Screenshot 2025-01-29 at 9 47 55 PM" src="https://github.com/user-attachments/assets/1c4c4bed-a9ac-4596-9d5a-eb6544f0e427" />

#### Create a notion page with no emoji. Go to your scenario on Make and **Run once**. Watch your notion page as it gets its emoji. Set your scenario you run as frequently as you wish. On free tier, the interval can be 15 minutes or more



https://github.com/user-attachments/assets/5a614ac9-6031-4f30-8a58-d14db4846f6f



#### May your pages be emojied! <img src="https://github.com/user-attachments/assets/39351a71-3036-49b0-800e-47753a557105" width="40" height="40">
