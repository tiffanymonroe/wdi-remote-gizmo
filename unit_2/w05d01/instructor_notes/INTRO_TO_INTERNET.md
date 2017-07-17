# Intro to the Internet

## Lesson Objectives

1. Define what a server is
1. Diagram the request response cycle
1. Describe the different parts of a URL
1. Explain what Node.js is and why it's useful
1. Diagram how the internet works
1. Explain what DNS is
1. Describe what packets are and how they travel to servers

## Define what a server is

A server is just a computer that is always turned on and connected to the internet

## Diagram the request response cycle

![Request Response Cycle](https://cdn.zapier.com/storage/photos/9ec65c79de8ae54080c1b417540469a6.png)

There four different types of requests we can make which correspond to four basic ways we can manipulate data

- POST (Create data)
- GET (Read data)
- PUT/PATCH (Update data)
- DELETE (Destroy data)

## Describe the different parts of a URL

URL stands for Uniform Resource Locator, and it's just a string of text characters used by Web browsers, email clients and other software to format the contents of an internet request message.

Let's breakdown the contents of a URL:

```
    http://www.example.org:3000/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__/ \_________________/ \_____________/ \____/
  protocol  host/domain    port        path          query-string  hash/fragment
```

Element | About
------|--------
protocol | the most popular application protocol used on the world wide web is HTTP. Other familiar types of application protocols include FTP, SSH, GIT, FILE, HTTPS
host/domain name | the host or domain name is looked up in DNS to find the IP address of the host - the server that's providing the resource
port | a server can have multiple applications listening on multiple ports.  This allows users to access a different application on the same host
path | web servers can organize resources into what is effectively files in directories; the path indicates to the server which file from which directory the client wants
query-string | the client can pass parameters to the server through the query-string (in a GET request method); the server can then use these to customize the response - such as values to filter a search result
hash/fragment | this URL fragment is generally used by the client to identify some portion of the content in the response; interestingly, a broken hash will not break the whole link - it isn't the case for the previous elements


## Explain what Node.js is and why it's useful

- Node is just a command line application that reads a JavaScript file and executes it within the context of the terminal
	- until recently, JavaScript could only be executed within a browsers
- Node allows JavaScript to become the first programming language that can be executed in both the browser and in a terminal application
	- Makes it easier to find a developer who can build all aspects of a web application
- Asynchronous
	- Uses event handlers (just like click, hover, etc) so you can tell an application to run code while waiting for other commands to finish executing
		- previously, long running commands like updating a database would have to finish before the application could continue running

## Diagram how the internet works

- [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)

1. Request starts at local computer
1. Goes to Router (can have multiple computers hooked up to it, forming a Local Area Network)
1. Goes to Modem
1. Goes ISP (internet service provider)
1. ISP is connected to other ISPs and similar institutions
	- we're in the actual net at this point
1. If the ISP isn't connected to the Network containing the final destination
	- it will ask the networks it is connected to if they are connected to the final destination's network
	- this process continues, building up a path to the final destination
		- each path to the final destination contains how many nodes it must visit to get to destination
		- can determine shortest path to final destination
1. Once connection to final destination is made, it goes to final destination's network (ISP)
1. From ISP it goes to the modem
1. From the modem, it goes to the router
1. From the router, it goes to the host computer

## Explain what DNS is

Domain Name Servers help convert a domain (example.com) to an IP address

### What is the Resolution Process:

![DNS Resolution](http://www.tcpipguide.com/free/diagrams/dnsresolution.png)

- [DNS Explained](https://www.youtube.com/watch?v=72snZctFFtA)

1. If computer can't find IP in cache, it asks The Resolving Name Server (configured in OS)
1. If RNS doesn't have info in memory, it will ask the Root Name Servers
1. Root Name Server know where TLD (Top Level Domain) servers are (.com, .edu, .gov, etc)
1. TLDs know where Authoritative Name Servers are (example.com)
1. Authoritative Name Servers knows the IP address of final destination
1. Resolving Name Server gives IP to the operating system

### How does the Authoritative Name Server know IP address?

1. When a domain is purchased
	- the registrar (company that registers the domain name, e.g. godaddy) is told which Authoritative Name Severs to use
	- The Authoritative Name Server is also told which IP address to use
1. The registrar then notifies the organization responsible for TLD name servers (the registry)
1. The registry tells the TLD name servers (.com, .net, etc) which Authoritative Name Servers to use for that new domain

## Describe what packets are and how they travel to servers

- [How Packet Travels in Network](https://www.youtube.com/watch?v=xIuBmOufbls)
- If a problem occurs, data in transit is lost forever
	- Sender would have to send entire data all over again
		- think about resending an entire movie just because something dropped for a moment at the last second
- Solution
	- Break each transmission up into tiny chunks
	- Receiver reassembles the chunks as they are received
	- If one piece is missing, sender just resends that tiny chunk
