//Generate Spotify API token
let express = require ('express')
let request = require ('readline')
let querystring = require ('querystring')
let cors = require ('cors')
let app = express()

let redirect_uri_login = 'https://localhost:8888/callback'
let client_id = 'd600d7a5f5894a3eb61c9adf5c260b55'
let client_secret = '1c688c8360b44030b0ba7a64a3d681ed'

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

// Generate Soundcloud Token



let port = process.env.PORT || 8888
console.log(`Listening on port ${port}. Go /login to initiate authentication flow.`)
app.listen(port)
