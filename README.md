# hapi-axios
A Hapi plugin for axios

# install
```
npm install github:dhso/hapi-axios
```

# options
```
//set baseUrl
baseURL: 'http://localhost:8081/api'

//set timeout
timeout: 8000
```

# example
```
let decision_engine_proxy = {
    method: ['GET'],
    path: '/decision/engine/proxy',
    handler: async (req, h) => {
        try {
            let matchData = await h.axios.post('/decision/engine', {
                "traffic_seg": 1,
                "page": 1,
                "product_ids": [1,2,3]
            });
            return {
                code: 200,
                data: res
            }
        } catch (err) {
            return h.response(Object.assign({ name: err.name, message: err.message }, err)).code(500);
        }
    }
};

```
