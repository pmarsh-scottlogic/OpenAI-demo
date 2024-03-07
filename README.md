# OpenAI-demo

demo project for a lightning talk.

## Get started

Once you've cloned the project, install the node packages with `npm ci`, Then make sure you add your api key somewhere. I've put it in a new separate file called `src/apikey.ts`, which contains only:

```typescript
const OPEN_AI_API_KEY = "my-open-ai-api-key-pasted-here";
```

## Run the project

run `npm run build` in a console of choice. Then open index.html in the browser of your choice. After each code change you will need to run `npm run build` again, and refresh the browser to see changes.

**NOTE THIS IS BAD PRACTISE. DO NOT COPY THIS FOR A REAL PROJECT. THE API KEY SHOULD BE KEPT SECURE IN A `.env` FILE INSTEAD.**
