# Supabase Proxy

> An opinionated Supabase proxy

## What can it do?

* [ ] Reverse proxy to Supabase endpoint, compatible with official client
* [ ] Additional client logging
* [ ] Information redaction post-logging, pre-proxing
* [ ] Set JWT token in a `httpOnly` cookie
* [ ] Cookie to Auth header translation
* [ ] Longterm JWT tokens
* [ ] Enable CORS
* [ ] Admin endpoints

## What advantages/disadvantages does it have over the Isomorphic client?

### Advantages

* `httpOnly` cookies are more secure on the browser-side
* Redact any information you don't want to send to Supabase e.g. client IP addresses
* Can set long term JWT tokens without the need for refresh token logic
* Gateway-level access control e.g. restrict IP addresses and additional logging

### Disadvantages

* Dedicated server needed for hosting

## License

The Unlicense
