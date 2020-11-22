export default class TwitchChat extends HTMLElement {
    static TWITCH_CHAT_URL = 'https://twitch.tv/embed/CHANNEL/chat?parent=PARENT';
    static get attributes() {
        return {
            channel: {},
            width: { default: 350 },
            height: { default: 500 },
        };
    }

    constructor() {
        super();
        this.initialized = false;
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.setDefaults();
        this.render();
    }

    render() {
        const content = TwitchChat.template.content.cloneNode(true);
        const iframe = content.querySelector('iframe');
        this._populateIframe(iframe);
        this.shadowRoot.innerHTML = '';
        this.shadowRoot.appendChild(content);
    }

    _populateIframe(iframe) {
        const chatUrl = TwitchChat.TWITCH_CHAT_URL.replace('CHANNEL', this.channel).replace(
            'PARENT',
            window.location.hostname,
        );
        iframe.src = chatUrl;
        iframe.setAttribute('frameborder', 50);
        iframe.width = this.width;
        iframe.height = this.height;
    }

    static get template() {
        const template = document.createElement('template');
        template.innerHTML = `<iframe></iframe>`;
        return template;
    }

    setDefaults() {
        const attributes = TwitchChat.attributes;
        Object.keys(attributes).forEach(attr => {
            if (!this[attr]) {
                this[attr] = attributes[attr].default;
            }
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        this[name] = newValue === '' ? true : newValue;
        if (this.initialized) {
            this._handleAttributeChange(name);
        }
    }

    static get observedAttributes() {
        const attributes = TwitchChat.attributes;
        return Object.keys(attributes).filter(attr => {
            return typeof attributes[attr].watch === 'undefined' || attributes[attr].watch;
        });
    }
}

if (!customElements.get('twitch-chat')) {
    customElements.define('twitch-chat', TwitchChat);
}
