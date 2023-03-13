# API Documentation

This document will contain guidelines as to how to access and update our project's API that is used to communicate data between the frontend and backend

# The General Idea

When changes in the backend are made that require new methods of interacting with data, we must update the project's API schema. The reason we do this is so we can update the frontend API to be able to perform these new interactions.

The process flows in this order:
Update backend data models > Update schema > Update frontend API clients

**NOTE:** This process is automated using drf-spectaular and OpenAPI Generator to maintain our API's schema and frontend clients

# Requirements

- NodeJS & the npm command-line interface installed on your system
  - Ensure you're in the project's root directory when running npm commands
- Able to access the projects Python virtual environment ([Guide in README.md](README.md))

## The API's schema.yml

The schema.yml file outlines how the API will interact with data. Our project utilizes the tool 'drf-spectacular' that automatically generates a schema for us based on our Django backend's models and views.

### How to view the API schema

You can either open [the schema.yml file](schema.yml) or go to [the visual interface at '_PROJECT_URL_/api/schema/'](http://localhost:8000/api/schema/) while the project is running

### How to update the schema

1. Enter Python virtual environment
2. run "python3 manage.py spectacular --file schema.yml" in the project's root directory

## How to generate frontend API clients

If you are updating a pre-existing API client you must delete the previously generated API client directory, as the generator will not overwrite pre-existing files.

1. Enter a command-line interface in the project's root directory
2. Run the command 'openapi-generator-cli generate -i schema.yml -g javascript -o ./frontend/api' (this generates a javascript API client in our frontend/api/ directory)
