![Twitch Chat Component logo](twitch-chat.png)

# TwitchChat

TwitchChat is a Web Component for embedding a Twitch Chat onto any web site with just 2 lines of HTML.

Check out a demo [here](https://matsuuu.github.io/twitch-chat/)

## Installation

### NPM

```bash
npm install twitch-chat-embed
```

### CDN

```html
<script type="module" src="https://unpkg.com/twitch-chat-embed"></script>
```

## Usage

### NPM

```javascript
import "twitch-chat-embed";

<twitch-chat></twitch-chat>
```

### CDN

```html
<script type="module" src="https://unpkg.com/twitch-chat-embed"></script>

<twitch-chat channel="ESL_SC2"></twitch-chat>
```

## Attributes

| Name    | Type          | Options                       |
| ------- | ------------- | ----------------------------- |
| Channel | String        | Any channel name on Twitch.tv |
| Width   | String/Number | Percentage or a Number        |
| Height  | String/Number | Percentage or a Number        |
