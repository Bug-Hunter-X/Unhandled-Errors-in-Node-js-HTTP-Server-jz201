# Unhandled Errors in Node.js HTTP Server
This repository demonstrates a common error in Node.js applications: inadequate error handling in HTTP servers.  The initial `server.js` showcases a basic server lacking robust error handling.  The improved `serverSolution.js` provides a more resilient solution.

## Problem
The original code lacks comprehensive error handling, making it susceptible to crashes and unexpected behavior. This is critical for production environments where stability and responsiveness are paramount.  

## Solution
The solution includes error handling using `server.on('error', ...)` to gracefully handle potential issues and prevent the server from crashing.  Additional logging provides valuable insight into errors.  Proper `res.end()` calls prevent connection issues.

## Usage
1. Clone this repository.
2. Run `node server.js` (original, buggy code).
3. Run `node serverSolution.js` (improved, error-handled code).
Observe the difference in behavior and error logging.