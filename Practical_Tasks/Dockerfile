# Node-Image
FROM node:20

WORKDIR /app/Workshop

COPY package*.json /app/

RUN cd /app && npm install

# copy code
COPY . /app/

#Port for Vite
EXPOSE 5173

# Command to start vite app
CMD ["npm", "run", "dev"]
