# which image to use
FROM node 

# which directory the application files will be stored
WORKDIR /usr/app 

# copy the package.json file to the directory
COPY package.json ./  

# install dependencies
RUN npm install 

# copy all the files from the application to the directory
COPY . . 

# port to expose (port being used on express)
EXPOSE 3333  

# command that will be executed when docker is mounted
CMD ["npm", "run", "dev"]  


## To build should run the following codes in the terminal (if it shows a permission error, add sudo before the command)
# (docker build -t <project_name> . ) [builds the image]
# (docker ps) [shows the images currently running]
# (docker run -p 3333:3333 <project_name> ) [runs the image]

## If you want to enter the container, run the following codes in the terminal
# (docker ps) [shows the images currently running, and get the name of the running container]
# (docker exec -it <container_name> /bin/bash) [enters the container]
