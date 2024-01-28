class AstroVideo extends HTMLElement {
    constructor() {
        super();

        // Lee el mensaje del atributo url.
        const urlVideoLaunche = this.dataset.url;
        console.log(urlVideoLaunche)
        const urlVideo = urlVideoLaunche.split('watch?v=')
        const URL = `https://www.youtube.com/embed/${urlVideo[1]}`;
        console.log(urlVideo)
        console.log(URL)
        const iframe = document.createElement('iframe');
        iframe.src = URL;
        iframe.width = '560'; // Ancho del video
        iframe.height = '315'; // Altura del video
        iframe.allowfullscreen = true;  
        iframe.frameborder = '0';
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
    }
  }

customElements.define('astro-video', AstroVideo);