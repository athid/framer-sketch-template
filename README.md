###Requirements
* Sketch.app
* Node.js (installed by the scripts below)
* Gulp (installed by the scripts below)
* This folder for each project

###Installation

Open a terminal window, type each of these commands:

1. Install brew package manager (to easily install node & gulp):  
  **`ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`**
2. Install node:  
 **`brew install node`**
3. Install gulp:  
  **`brew install gulp`**
4. Install sketch-tool:  
  **`curl -L https://raw.githubusercontent.com/cognitom/dotfiles/master/lib/sketchtool.sh | sudo sh`**  
  The last command will ask for your admin password, (which probably is the same as you have on os x login for your user)


### First time init of your folder.
1. Unpack the zip, place the folder where you want to work, rename it if you like...

2. Open terminal, type **`cd `** and drop the downloaded folder on the terminal, press enter

2. Setup the node installation in your folder:  
  **`npm install`**
  

###Usage
1. Open terminal, type **`cd `** and drop the downloaded folder on the terminal, press enter
2. Run gulp by typing **`gulp`**, press enter.
3. Work on and save either **`app.js`** or **`assets.sketch`** in the `src` folder.
