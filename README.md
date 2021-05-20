# Gitlab Build Artifact API
This is a POC for reading the output artifact files generated during a Gitlab build job on the Windows and Linux File Systems.  
The purpose of this applicaiton is to create an API to represent the current state of the file system and display the build results by reading the files, folders, and meta-data from the file contents

## Configuring Project
- You must have Node.js installed on your local machine for this to work
- After cloning the project, from the root directory run the command ```npm install```
- To run the API locally run the command ```npm run start``` (The API will return an error until you configure the environment file (see below)

## Configuring the Builds Folder
- At the root level of the project create a file named ```.evn```
- In the .env file you must set the ```BUILDS_ROOT```
- The file should have one line and resemble the following

```BUILDS_ROOT=<PATH_CONTAINING_BUILDS_FOLDERS>``` 
