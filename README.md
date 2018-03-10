# nodets

## Synopsis

I've been stepping outside of my node.js comfort zone lately and trying different tools and configurations. With this one I wanted to see how far I can get using typescript and Docker. Adding jest soon.

The plan is to build out a useful little server that provides some type of value. Probably static lookups like states/countries or temp/currency conversions. We'll see what happens. :-)

## Code Example

WIP

## Motivation

Playing around with typescript && docker in a node application.

## Installation

Provide code examples and explanations of how to get the project.

## Docker stuff

Build the app

```
docker build -t nodets .
```

Run the app

```
docker run -p 49160:8080 -d nodets
```

Enter the container

```
docker exec -it <container id> /bin/bash
```

Check app output

```
docker logs <container id>
```

Verify the app is accessible w/ curl

```
curl -i localhost:49160
```

## API Reference

WIP

## Tests

Coming soon!

## Contributors

Adam Wysocki (adam@adamwysocki.me). Let me know if you have any questions or comments.

## License

A short snippet describing the license (MIT, Apache, etc.)
