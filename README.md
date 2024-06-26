# call-widget-redesigner

A website that I can put in Hubspot SIMPLY, that has the call widget, the call widget must be redesigned, to match the page. 

Here's the widget code: <div id="myZadarmaCallmeWidget15156"></div><script>  var myZadarmaCallmeWidget15156;  var myZadarmaCallmeWidgetFn15156 = function() {    myZadarmaCallmeWidget15156 = new ZadarmaCallmeWidget("myZadarmaCallmeWidget15156");    myZadarmaCallmeWidget15156.create({"widgetId": "JsnsBkSzyJmNzpc1nec1ar85ugZ6ce3zr68gNLM6Ga6HeMt84eeya3xapj9Udmk2pEMj21P4gkpsaB67Jr5yC9KK2uRkJz8Lc47ff3fa7d8a324b4d090c41ddcd6a40", "sipId":"756909", "domElement":"myZadarmaCallmeWidget15156"}, {"shape":"square", "language":"en", "width":"0", "dtmf":false, "font": "'Trebuchet MS','Helvetica CY',sans-serif", "color_call": "rgb(255, 255, 255)", "color_bg_call": "rgb(0,6,26)", "color_border_call": "rgb(237,184,61)", "color_connection": "rgb(255, 255, 255)", "color_bg_connection": "rgb(33, 211, 166)", "color_border_connection": "rgb(144, 233, 211)", "color_calling": "rgb(255, 255, 255)", "color_border_calling": "rgb(255, 218, 128)", "color_bg_calling": "rgb(255, 181, 0)", "color_ended": "rgb(255, 255, 255)", "color_bg_ended": "rgb(164,164,164)", "color_border_ended": "rgb(210, 210, 210)"    });  };  if (window.addEventListener) {    window.addEventListener('load', myZadarmaCallmeWidgetFn15156, false);  } else if (window.attachEvent) {    window.attachEvent('onload', myZadarmaCallmeWidgetFn15156);  }</script>

Here is the load code:
<div id="zadarmaScripts"></div><script>(function() {  var script = document.createElement('script');  script.src = 'https://my.zadarma.com/callmewidget/v2.0.9/loader.js';  document.getElementById('zadarmaScripts').appendChild(script);}());</script>

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React with shadcn-ui and Tailwind CSS.

- Vite
- React
- shadcn/ui
- Tailwind CSS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/call-widget-redesigner.git
cd call-widget-redesigner
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
