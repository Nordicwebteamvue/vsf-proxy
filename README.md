## vsf-proxy

```
"extensions": {
  ...
  "proxy": {
    "example": {
      "secret": "__SECRET_CHANGE_ME__",
      "urls": [
        "http://localhost:8080/api/ext/vsf-proxy/test",
        "http://localhost:8080/api/ext/vsf-proxy/test2"
      ]
    }
  }
}
```

would be triggered with this URL: `http://localhost:8080/api/ext/vsf-proxy/hook/example?secret=__SECRET_CHANGE_ME__`
