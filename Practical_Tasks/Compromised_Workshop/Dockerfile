FROM node:20

WORKDIR /app/Workshop

COPY package.json package-lock.json /app/Workshop/

RUN npm install && npm install three

#Port for Vite
EXPOSE 8083

# Command to start vite app
CMD npx vite . --force --port 8083 --host 0.0.0.0
 