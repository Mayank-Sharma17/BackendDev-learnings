# What is an API ?
- APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

- API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses. Their API documentation contains information on how developers are to structure those requests and responses.

# How do APIs work?
API architecture is usually explained in terms of client and server. The application sending the request is called the client, and the application sending the response is called the server. So in the weather example, the bureau’s weather database is the server, and the mobile app is the client. 

There are four different ways that APIs can work depending on when and why they were created.

### SOAP APIs 
These APIs use Simple Object Access Protocol. Client and server exchange messages using XML. This is a less flexible API that was more popular in the past.

### RPC APIs
These APIs are called Remote Procedure Calls. The client completes a function (or procedure) on the server, and the server sends the output back to the client.

### Websocket APIs
Websocket API is another modern web API development that uses JSON objects to pass data. A WebSocket API supports two-way communication between client apps and the server. The server can send callback messages to connected clients, making it more efficient than REST API.

### REST APIs
These are the most popular and flexible APIs found on the web today. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client. Let’s look at REST APIs in more detail below.

# What are the different types of APIs?
APIs are classified both according to their architecture and scope of use. We have already explored the main types of API architectures so let’s take a look at the scope of use.

### Private APIs
These are internal to an enterprise and only used for connecting systems and data within the business.

### Public APIs 
These are open to the public and may be used by anyone. There may or not be some authorization and cost associated with these types of APIs.

### Partner APIs 
These are only accessible by authorized external developers to aid business-to-business partnerships.

### Composite APIs 
These combine two or more different APIs to address complex system requirements or behaviors. 

# Formatting API requests
**API endpoint** - In the docs of any public api there is an example api, something like this - ` BaseURL/endpoint `, endpoint is a fixed path.

**Query Parameters** - every query start with a question mark "?" after the endpoint, it is used to filetring, searching and sorting the api req -> ` BaseURL/endpoint?query=value ` , simply query parameters are key-value pairs. You can add multiple query parameters by using "&" after the first query -> ` ?query1=value1&query2=value2 `

**Path Parameters** - after the base URL endpoint is a fixed path, after adding a backslash "/" you can add a parameter that does change and this is usually to find some specific resource that exists -> ` BaseURL/endpoint/{ path- parameter } `.

# JSON
- JavaScript object Notation its a way to format datat that can be sent over the internet in a readable but also efficient way, its structured after js object, JSON is serialized into a string.

- when you want to send JSON over the internet you need to perform what's called serialization -> JSON serialization (the process of converting data into a JSON format) and deserialization (converting JSON back into data structures) are efficient operations, making it a good choice for data exchange between client and server.

  - JS Object ------> JSON = ` const jsonData = JSON.stringify(data) ` (method from JSON Module)
  - JSON ------> JS Object = ` const data = JSON.parse(JSONData) ` (method from JSON Module)

# Using Axios
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests, it helps you send requests to servers or APIs on the internet and receive responses. Axios makes it easier to:

- **Send HTTP Requests:** You can use Axios to send GET, POST, PUT, DELETE, and other types of HTTP requests to interact with web services or fetch data from a server.

- **Handle Responses:** Axios provides tools to handle the responses you get from the server, such as JSON data, HTML, or other content. You can easily extract and use this data in your JavaScript code.

- **Set Headers and Parameters:** You can customize your requests by adding headers, query parameters, and request payloads to provide additional information to the server.

- **Handle Errors:** Axios simplifies error handling, making it easier to manage issues like network errors or server problems when making requests.

In essence, Axios is a helpful tool for web developers to communicate with external servers and services, making it a fundamental part of building web applications that need to interact with data from the internet.
Offical Documentation - [Axios](https://axios-http.com/docs/intro)

# API Authentication and Authorization
We all know that APIs are software protocols and tools that help clients and servers to communicate. Since API is a profound entity with an external resource that has the capability of accepting and responding to protected resource requests by users and clients, they must be equipped to ensure that applications and clients trying to access data are authentic, so that they can proceed to authorized full access when identity is confirmed. The processes of certifying the identity of users trying to access resources on the server and this is what is known as API authentication. 

## Methods of API Authentication
0. No Authentication
1. Basic Authentication
2. API Key Authorization
3. Token based Authentication

### Basic Authentication
HTTP Basic Authentication is the simplest way to verify users. It combines a username and password, encodes them using Base64, and sends them in an "Authorization" header. When a client sends a request, the server checks this header against stored credentials. If they match, the server processes the request; if not, it sends a special code indicating authentication failure and denies the request.

original format ` username:password ` 
> it takes text -> ASCII (anything you type on your keyboard) -> convert it into bits to represent that particular char -> encoded into another char (Base64) 

> **NOTE** We don't want to send massive amount of data over the internet when people are making API requests, normally API providers do is they can **paginate** the response so they'll give you 10/20 pages at a time and you can req. which page you want.

Now using basic auth we get the string of username and password which is encoded into base64, which can be decoded into the orignal format of username:password, so someone on the internet can intercept your API req to get username and pass --> most API proiders that use basic Auth will have **https** on their domain which means we're using cryptography to securely encode all the data that being passed back and forth.
  
### API key Authorization
API Key Authorization is like having a special key to access an API. It's not your username or password but a unique code. Imagine you want to enter a secure building. Your API key is like the keycard that unlocks the door. When you send a request to the API, you include this key. The API checks if it's the right key, and if it is, you're allowed in.

Now, let's understand the difference between Authentication and Authorization. Authentication is about confirming your identity, like showing your ID at the door. API Key Authorization is more like proving you have permission to enter once your identity is confirmed. So, in our building example, your ID is authentication, and the keycard to access certain floors is authorization.

API Key Authorization solves one of the problems associated with Basic Authentication, which is the exposure of user credentials (username and password) in each API request. In Basic Authentication, these credentials are sent with every request, which can pose a security risk if intercepted because they can potentially be used to gain unauthorized access to other systems or services.

API Key Authorization, on the other hand, uses a unique key that is separate from the user's login credentials. This key is typically long, random, and doesn't reveal any sensitive information. When used in API requests, it provides a more secure way to access APIs because it doesn't expose sensitive user information with every request, reducing the risk of interception and misuse.

### Token based Authentication
Getting the user to use a username and password to login and then once they've logged in we generate a token to be used with the API so the api doesn't get involved with the username and password and instead uts the token that's constantly being used to interect with the API.

Normally you'll see token based Authentication as **OAuth** and **OAuth2.0** is probably the industry standard for doing token based authentication. OAuth authentication is fundamentally a more secure and powerful system than the rests, and it’s quickly becoming the number one choice for many clients and applications.

# REST APIs (Making GET, POST, PUT, PATCH and DELETE API requests)

## REST Architecture
REST stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol. It revolves around resource where every component is a resource and a resource is accessed by a common interface using HTTP standard methods.

A REST Server simply provides access to resources and REST client accesses and modifies the resources using HTTP protocol. Here each resource is identified by URIs/ global IDs. REST uses various representation to represent a resource like text, JSON, XML but JSON is the most popular one.

## HTTPS Methods
REST APIs are used to access and manipulate data using a common set of stateless operations. These operations are integral to the HTTP protocol and represent essential create, read, update, and delete (CRUD) functionality.

Following HTTP methods are commonly used in REST based architecture:-

- `GET` − retrieve an index of resources or an individual resource. 
- `POST` − create a resource or generally provide data. 
- `PUT` − create or replace a new resource. 
- `PATCH` − update/modify a resource. 
- `DELETE` − remove a resource. 

Make http requests using Axios - <i> [Axios API](https://axios-http.com/docs/api_intro) Docs</i>