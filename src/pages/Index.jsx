import React from "react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#00061A] text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#EDB83D]">Your Brand. Our Voice. Their Experience.</h1>
        </header>
        <section className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="md:w-1/2 text-center md:text-left">
            <img src="/images/logo.png" alt="YourFriday Logo" className="mx-auto md:mx-0 mb-4" />
            <p className="text-lg mb-4">Call now to lock in the beta -- Register for the waitlist below</p>
            <button className="bg-[#EDB83D] text-[#00061A] py-2 px-4 rounded-full mb-4">
              <i className="fas fa-phone-alt"></i> Click to Speak to Our Friday Now!
            </button>
            <button className="bg-[#A68A6D] text-[#00061A] py-2 px-4 rounded-full">register for waitlist</button>
          </div>
          <div className="md:w-1/2">
            <img src="/images/hero-image.png" alt="Hero" className="mx-auto" />
          </div>
        </section>
        <section className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">We make the voice of your brand.</h2>
          <p className="text-lg mb-4">Your own Friday will know as much as ChatGPT. YourFri.day is powered by it.</p>
        </section>
        <section className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Your Friday knows your business. Inside and Out.</h3>
            <p className="text-lg mb-4">833-9-FRIDAY</p>
            <p className="text-lg mb-4">412-500-8333</p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/assistant.png" alt="Assistant" className="mx-auto" />
          </div>
        </section>
        <section className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Your Friday knows ChatGPT</h3>
          <p className="text-lg mb-4">It's powered by it.</p>
          <p className="text-lg mb-4">Welcome to YourFriday, your source for custom, bespoke, one-of-kind Intelligent Voice Agents to match your brand.</p>
          <ul className="list-disc list-inside mb-4">
            <li>No Per Call or Min Fees</li>
            <li>Intimately knowledgeable about your business.</li>
            <li>Special beta at less than cost.</li>
          </ul>
          <button className="bg-[#A68A6D] text-[#00061A] py-2 px-4 rounded-full">register for the waitlist</button>
        </section>
        <footer className="text-center py-4">
          <p className="text-lg">We make the voice of your brand.</p>
          <p className="text-sm">Your own Friday will know as much as ChatGPT. YourFri.day is powered by it.</p>
          <p className="text-sm">Copyright © 2024, DestroyAll.Art LLC dba YourFri.day</p>
        </footer>
      </div>
      <div id="myZadarmaCallmeWidget15156"></div>
      <script dangerouslySetInnerHTML={{ __html: `
        var myZadarmaCallmeWidget15156;
        var myZadarmaCallmeWidgetFn15156 = function() {
          myZadarmaCallmeWidget15156 = new ZadarmaCallmeWidget("myZadarmaCallmeWidget15156");
          myZadarmaCallmeWidget15156.create({
            "widgetId": "JsnsBkSzyJmNzpc1nec1ar85ugZ6ce3zr68gNLM6Ga6HeMt84eeya3xapj9Udmk2pEMj21P4gkpsaB67Jr5yC9KK2uRkJz8Lc47ff3fa7d8a324b4d090c41ddcd6a40",
            "sipId":"756909",
            "domElement":"myZadarmaCallmeWidget15156"
          }, {
            "shape":"square",
            "language":"en",
            "width":"0",
            "dtmf":false,
            "font": "'Trebuchet MS','Helvetica CY',sans-serif",
            "color_call": "rgb(255, 255, 255)",
            "color_bg_call": "rgb(0,6,26)",
            "color_border_call": "rgb(237,184,61)",
            "color_connection": "rgb(255, 255, 255)",
            "color_bg_connection": "rgb(33, 211, 166)",
            "color_border_connection": "rgb(144, 233, 211)",
            "color_calling": "rgb(255, 255, 255)",
            "color_border_calling": "rgb(255, 218, 128)",
            "color_bg_calling": "rgb(255, 181, 0)",
            "color_ended": "rgb(255, 255, 255)",
            "color_bg_ended": "rgb(164,164,164)",
            "color_border_ended": "rgb(210, 210, 210)"
          });
        };
        if (window.addEventListener) {
          window.addEventListener('load', myZadarmaCallmeWidgetFn15156, false);
        } else if (window.attachEvent) {
          window.attachEvent('onload', myZadarmaCallmeWidgetFn15156);
        }
      `}} />
      <div id="zadarmaScripts"></div>
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var script = document.createElement('script');
          script.src = 'https://my.zadarma.com/callmewidget/v2.0.9/loader.js';
          document.getElementById('zadarmaScripts').appendChild(script);
        }());
      `}} />
    </div>
  );
};

export default Index;