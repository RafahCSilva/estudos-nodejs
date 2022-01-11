#!/usr/bin/env bash

nvm install lts/gallium
# Downloading and installing node v16.13.2...
# Downloading https://nodejs.org/dist/v16.13.2/node-v16.13.2-darwin-x64.tar.xz...
# Computing checksum with sha256sum
# Checksums matched!
# Now using node v16.13.2 (npm v8.1.2)
nvm use lts/gallium
# Now using node v16.13.2 (npm v8.1.2)
node -v
# v16.13.2
npm -v
# 8.1.2

## Isntalando o TypeScript
npm i -g typescript
tsc -v
# Version 4.5.4

## Iniciando o diretorio com o arquivos de configuracao do ts
tsc --init


## Compilando e executando
tsc basico.ts
node basico.js


## Code Runner
npm i -g ts-node
ts-node -v
# v10.4.0

## for IDEA, need install locally
npm i ts-node
# Com o arquivo aberto, rode com CONTROL+SHIFT+R


## Um simples live reload
npm i -s live-server
npm run start
## Watch do Compilador
tsc -w
