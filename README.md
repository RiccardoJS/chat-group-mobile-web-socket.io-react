# Description

A really nice multi-client chat-group for mobile and desktop.

Really usefull to start other interesting projects.

![Image of Intro](./intro.png)
![Image of Chat](./chat.png)

## Installation

Download the project and open the terminal pointed to the project.

Use the package manager [yarn](https://yarnpkg.com/lang/en/) to install the project:


```bash
cd react
yarn install
cd ..
sh build.sh
```

## Usage

Take the ip address of your computer you used as server:

```bash
ifconfig
```

Open the terminal pointed to the project directory:

```bash
cd server
yarn start
```

Point the mobile devices to :   **http://your.server.ip.address:3000**

**If you want to modify the client/react side, after you'll need a rebuild before starting again the server:**

```bash
sh build.sh
```
