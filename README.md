# WebRTC Test Setup

Create setup to use any video+audio files to simulate webcam and microphone when using selenium automation with FireFox browser. Browser launch should not include any manual interaction with it.

### Dev

Requires 
- [docker](https://docs.docker.com/engine/installation/) 
- [docker-compose](https://docs.docker.com/compose/install/)
- [node](https://nodejs.org/en/download/) – Better LTS instead of latest 10th.

Make sure Docker is running. Spin up the Hub and FirefoxNode containers

```bash
$ docker-compose up -d
```

Install yarn and run the script

```bash
$ npm install --global yarn # Install yarn or use npm - your preference
$ yarn install # Install/update dependencies 
$ yarn test # run the test
```

After test you can stop the containers

```bash
$ docker-compose down
```

#### Debugging

In order to see if the WebRTC receives fake video, it is a good idea to check the browser during the test. Simply use `Screen Sharing` app on MacOS or any other VNC viewer and in server field put `127.0.0.1:5900`.

When you are prompted for the password it is `secret`.
