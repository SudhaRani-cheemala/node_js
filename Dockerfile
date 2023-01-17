FROM node:14-alpine 
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . ./
CMD ["npm", "run", "start"]

