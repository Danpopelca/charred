document.addEventListener("DOMContentLoaded", function () {
    const version = new Date().getTime();
  
    // Selectăm CSS, JS, imagini, video, source
    const elements = document.querySelectorAll(
      'link[rel="stylesheet"], script[src], img[src], source[src]'
    );
  
    elements.forEach(el => {
      const attr = el.tagName === "LINK" ? "href" : "src";
      const originalUrl = el.getAttribute(attr);
  
      // Evităm dublarea versiunii dacă deja are un ?v=
      if (!originalUrl) return;
      if (originalUrl.includes("v=")) return;
  
      const url = new URL(originalUrl, window.location.href);
      url.searchParams.set("v", version);
      el.setAttribute(attr, url.toString());
    });
  });