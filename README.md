# inventory-frontend
The frontend component of the qr enabled home inventory web application

# Download and install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Load nvm (you might need to restart your terminal or source your profile)
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

``` shell
nvm install node  # This installs the latest version
nvm alias default node  # Set the latest version as the default
```

``` shell
cd inventory-frontend
npm install
npm run format
npm run dev
```