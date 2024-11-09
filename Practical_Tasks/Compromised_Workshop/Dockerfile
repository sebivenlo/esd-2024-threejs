FROM node:20

WORKDIR /app/Workshop

COPY package.json package-lock.json /app/

RUN cd /app && npm install 

#Port for Vite
EXPOSE 8083

# Command to start vite app
CMD cd /app/Workshop && npx vite . --force --port 8083 --host 0.0.0.0
 