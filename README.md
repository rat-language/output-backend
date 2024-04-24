# Output-Backend for Rat-Language

This repository contains the backend service for compiling code written in Rat-language. It is designed to work in conjunction with a front-end that provides an interface for writing and submitting Rat-language code to be compiled.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12.x or later recommended)
- npm (comes with Node.js installation)

## Getting Started

Follow these steps to get your backend service running:

### 1. Clone the Repository

Clone this repository to your local machine using git:

```bash
git clone https://github.com/<your-username>/output-backend.git
cd output-backend
```

Replace <your-username> with your GitHub username or organization name under which the repository resides.

### 2. Install Dependencies

Navigate to the cloned repository directory and run the following command to install all required dependencies:

```
npm install
```

This command reads the package.json file and installs all necessary packages listed under dependencies.


### 3. Start the Server

Once the dependencies are installed, you can start the server by running:



```
npm start
```

This will start the backend server typically on port 4000, listening for requests from the front-end service.


### Using the API

With the server running, it will accept POST requests at the /compile endpoint. This endpoint expects JSON data containing the Rat-language code to be compiled.

#### Example Request

You can test the server using a tool like Postman or curl with a request like this:

```
curl -X POST http://localhost:4000/compile \
-H "Content-Type: application/json" \
-d '{"code": "print(\\"hello world!\\")", "outputType": "js"}'
```


### Contributing

Contributions to the backend are welcome! Please feel free to fork the repository, make your changes, and submit a pull request.

### LICENSE

This project is licensed under the MIT License - see the LICENSE.md file for details.

