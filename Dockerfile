# Start from the official Node.js image (version 20, lightweight)
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to start the app
CMD ["npm", "start"]