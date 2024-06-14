# Use Node.js 21 as the base image
FROM node:21

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json package-lock.json ./

# Copy the rest of the application code to the working directory
COPY . .

# Install npm dependencies
RUN npm install && npm run migration:run 

# Build the TypeScript code
RUN npm run build

# Expose the port that the app runs on
EXPOSE 3000

# Define the command to run your app using npm start
CMD ["node", "dist/src/main", "npm", "run", "start:prod"]