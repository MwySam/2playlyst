//Generate Spotify API token
let express = require ('express')
let request = require ('request')
let querystring = require ('querystring')
let cors = require ('cors')
let app = express()

let redirect_uri_login = 'http://localhost:8888/callback'
let client_id = 'd600d7a5f5894a3eb61c9adf5c260b55'
let client_secret = '02c36098517b404dac39f0f556fab220'

app.use(cors())
/*Log in end point 
Redirects to Spotify authorized method
Passes client id,scope,redirect uri*/
app.get('/login', function(req, res){
    res.redirect('https://accounts.spotify.com/authorize?' + querystring.stringify({
        response_type: 'code',
        client_id:client_id,
        scope: 'user-read-private user-read-email user-library-read',
        redirect_uri: redirect_uri_login
    }))
}
)
/*Endpoint to send authorisation*/
app.get('/callback', function (req,res){
    let code = req.query.code || null
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
        code: code,
        redirect_uri: redirect_uri_login,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(
            client_id + ':' + client_secret
        ).toString('base64'))
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      var access_token = body.access_token
      let uri = process.env.FRONTEND_URI || 'http://localhost:3000/playlist'

      res.redirect(uri + '?access_token=' + access_token)
    })
  })

//--------------------------------------------------------------------------------------------------------------------------------


// Generate Youtube Token

const jwt = require('jsonwebtoken');
const fs = require('fs');

const private_key =
"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDwaxdewTCvdqs1\n+CN5RtpvbNv706Brd5MKIBdAUw7vX2GfJ/jRYgkFJkfJcDUmk2rY256QF83WddI8\n164sxudh/WMxMrMDBUo2zivlK31AKRq1lHkxZtT17Zhj3fO89s90zVneEwQymcpf\nHc0aTRdEvzWdnV6p6dUzHrRsVunYIdxkML+vpqxvNxQUtEwP/SO7c0MR7l3/irD/\nhjX6fXuf1fppNVZX/pFM035ZTiLAFaawTb1ziIg5X7tKNYixYclj8HMdcXnJpPBh\n9VuVllAM6Jm3uGjbSFmc896rnaDaCB+9KDPBsRc61Moi43/QuoEJXBt/Q6nHKYg/\nF5e4XZk/AgMBAAECggEABD/+GqxfgqqMCL2t322VEwnACBF2jKgsC99Af037n0Wn\nkKeZJHiDCxIF1Ws/kLZ8O0mhpNjT1IuD/IfU3Fi6pYhgQ2vblru/ca2f0tUK+kzz\nhqKv/iZ6f9fHDqu/DjEA1xMghhcvHFYSl7V5ZNuVccPoHxBButtOQTFTbY6rk9+u\nfymerqfspXoPYBHcMXsOlr/s/VQFrf3pCT3Xte5Mxx5JXKCm5EIP34xmikyKjhGW\nqp1DLKXirC9ThWy++HUXQnTYoP4RYp6sxqsNsM3Fg9Vvg1sRIwRNjzxepskUXnLQ\nyEE7SfXRtaoG8EckrLP1VHawc5J8W2jx6WKy5+xOCQKBgQD45mBd4nTvbbbQdR41\nXtko7Dj/9Vti3nsqlgz7bNM0HaSLxZ71RSAEFalzDBR4Q08TdXLVtawTkI7sza/9\nSgILgLP/mvL5gev6OwAs66cSB7prrjeLPo6jjBTmw9CEevx0C6AA2/1MQDsjChtX\n7Tzy1RB5kXq0yUAUzknUgU264wKBgQD3RsbqIdmT6U0a8lMeUa2uiyj6k7o6VZA9\nWlO3YNkKzpe69MEcnRokhPAmt0CRwwCPP+vssktYAywESjqEOYOkxqT2TAixWiJM\nVtSRUm7kmo6dZmIFVj5oiz3HfTSTQ195Dffr5vZQn2MLgg0WkjZSatbk/lx0c7JA\nvoY1dNWq9QKBgBAZXpxT/HpMH2oGWUjcdLFn7hvoM9wGRfMwN3C/zj1tuWntA2Yb\n7YE2IXq2ilBpEiFRFHdsQ9AUJpp8h2ibs9wom/vpetPWqnvJ+y3spCbPZyh14VPZ\nXQKJGgT/H2qiRdf/tH65u/2Fng2bJr+eMbYHQASM+2HcLo/p8+6R2oQ/AoGBALbL\nZHpqIYydF7nGzzkHikwQZW+vSyiaXfFs15wlBO1fQX0cN7FuVYgPmfQU3a+jJsO+\nriogt1/NoHlfYhii57Ukf4fvNzHb/qTOP39aH83wj2K979IgKixgWoAhB3+he29i\nqxaBey6oVLCKKCC6X1vXzRolCrWvXWNNNKtJvjYNAoGAF9DRwYi8RUHa+RDzw2Gv\nM+udd8MtE+OyBLukVxF7i0Zv6VtIaZz4JH6ml5KXqeNbwj3iqdiVSbfgY+QQr6Ux\n5koNH7luypnJg3ptGt56h+o8R4lhNS/gIrrZ3oAaao3HRhQtnvlkVFYLUrTtZpjq\nMppbEeNgthiIu5qWJHmdRdY=\n-----END PRIVATE KEY-----\n"
;

const team_id = ''; 
const key_id = ''; 
const token = jwt.sign({}, private_key, {
  algorithm: 'RS256',
  expiresIn: '180d',
  issuer: team_id,
  header: {
    alg: 'RS256',
    kid: key_id
  }
});
//Endpoint for client to access token
//const token_key = ''
app.get('/token', function (req, res) {
  //if(req.query.key === token_key){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({token: token}));
//  }
});

//---------------------------------------------------------------------------------------------------------------------

let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)
