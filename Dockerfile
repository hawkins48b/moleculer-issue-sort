# Develop stage
FROM node:10.3-alpine
ENV NODE_ENV=development
WORKDIR /app
# npm packages
COPY package.json package-lock.json ./
RUN npm install
# Copy project
COPY . .