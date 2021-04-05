# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /egob

#env
ENV PATH /egob/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.1 -g --silent
# add app
COPY . ./

#Expose port
EXPOSE 80

# start app
CMD ["npm", "start"]