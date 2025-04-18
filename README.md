# commercelayer-cli-plugin-token

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@commercelayer/cli-plugin-token.svg)](https://npmjs.org/package/commercelayer-cli-plugin-token)
[![Downloads/week](https://img.shields.io/npm/dw/@commercelayer/cli-plugin-token.svg)](https://npmjs.org/package/@commercelayer-/li-plugin-token)
[![License](https://img.shields.io/npm/l/@commercelayer/cli-plugin-token.svg)](https://github.com/pviti/@commercelayer/cli-plugin-token/blob/master/package.json)

<!-- toc -->

* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
## Usage
<!-- usage -->

```sh-session
commercelayer COMMAND

commercelayer [COMMAND] (--help | -h) for detailed information about plugin commands.
```
<!-- usagestop -->
## Commands
<!-- commands -->

* [`commercelayer token:assertion`](#commercelayer-tokenassertion)
* [`commercelayer token:decode TOKEN`](#commercelayer-tokendecode-token)
* [`commercelayer token:get`](#commercelayer-tokenget)
* [`commercelayer token:revoke TOKEN`](#commercelayer-tokenrevoke-token)

### `commercelayer token:assertion`

Generate an assertion to be used with the jwt bearer flow.

```sh-session
USAGE
  $ commercelayer token:assertion -o <value> [-t Customer|User] [-c | -u] [-C <value>...] [-j]

FLAGS
  -C, --custom=<value>...  custom claim attribute [key=value]
  -c, --customer           owner of type 'Customer'
  -j, --json               print assertion in json format
  -o, --ownerId=<value>    (required) the owner id
  -t, --type=<option>      the type of the owner
                           <options: Customer|User>
  -u, --user               owner of type 'User'

DESCRIPTION
  generate an assertion to be used with the jwt bearer flow

EXAMPLES
  cl token:assertion -t <Customer|User> -o <ownerId>

  cl token:assertion -co <ownerId> -j

  cl token:assertion -to <ownerId> -C key1=value1 -C key2=value2 key3=value3
```

_See code: [src/commands/token/assertion.ts](https://github.com/commercelayer/commercelayer-cli-plugin-token/blob/main/src/commands/token/assertion.ts)_

### `commercelayer token:decode TOKEN`

Decode a Commerce Layer access token.

```sh-session
USAGE
  $ commercelayer token:decode TOKEN [-f]

ARGUMENTS
  TOKEN  the access token to be decoded

FLAGS
  -f, --full  show the full token info

DESCRIPTION
  decode a Commerce Layer access token

ALIASES
  $ commercelayer token:info

EXAMPLES
  $ commercelayer token:decode <accessToken>

  $ cl token:info <accessToken> -f
```

_See code: [src/commands/token/decode.ts](https://github.com/commercelayer/commercelayer-cli-plugin-token/blob/main/src/commands/token/decode.ts)_

### `commercelayer token:get`

Get a new access token.

```sh-session
USAGE
  $ commercelayer token:get [-o <value>] (-s <value> -i <value>) [-S <value>... ] [--info] [-a <value> | [-e
    <value> -p <value>] | ]

FLAGS
  -S, --scope=<value>...      access token scope (market, stock location)
  -a, --assertion=<value>     use jwt assertion
  -e, --email=<value>         customer email
  -i, --clientId=<value>      (required) application client_id
  -o, --organization=<value>  the slug of your organization
  -p, --password=<value>      customer secret password
  -s, --clientSecret=<value>  application client_secret
      --info                  show access token info

DESCRIPTION
  get a new access token

EXAMPLES
  $ commercelayer token:get -o <organizationSlug> -i <clientId> -s <clientSecret>

  $ cl token:get -o <organizationSlug> -i <clientId> -S <scope> --info

  $ cl token:get -i <clientId> -s <clientSecret> -a <jwtAssertion>
```

_See code: [src/commands/token/get.ts](https://github.com/commercelayer/commercelayer-cli-plugin-token/blob/main/src/commands/token/get.ts)_

### `commercelayer token:revoke TOKEN`

Revoke a Commerce Layer access token.

```sh-session
USAGE
  $ commercelayer token:revoke TOKEN [-o <value>] (-s <value> -i <value>) [-S <value>... ]

ARGUMENTS
  TOKEN  access token to revoke

FLAGS
  -S, --scope=<value>...      access token scope
  -i, --clientId=<value>      (required) application client_id
  -o, --organization=<value>  the slug of your organization
  -s, --clientSecret=<value>  application client_secret

DESCRIPTION
  revoke a Commerce Layer access token

EXAMPLES
  $ commercelayer token:revoke -o <organizationSlug> <accessToken> -i <clientId>

  $ cl token:revoke -o <organizationSlug> <accessToken> -i <clientId> -s <clientSecret>
```

_See code: [src/commands/token/revoke.ts](https://github.com/commercelayer/commercelayer-cli-plugin-token/blob/main/src/commands/token/revoke.ts)_
<!-- commandsstop -->
