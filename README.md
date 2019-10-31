## vsf-proxy

### Installation

```sh
yarn add @kodbruket/vsf-proxy
```

```json
"registeredExtensions": [
  ...,
  "@kodbruket/vsf-proxy"
],
"extensions": {
  ...
  "proxy": {
    "example": {
      "secret": "__SECRET_CHANGE_ME__",
      "urls": [
        "http://localhost:8080/api/ext/@kodbruket/vsf-proxy/test",
        "http://localhost:8080/api/ext/@kodbruket/vsf-proxy/test2"
      ]
    }
  }
}
```

would be triggered with this URL: `http://localhost:8080/api/ext/@kodbruket/vsf-proxy/hook/example?secret=__SECRET_CHANGE_ME__`
