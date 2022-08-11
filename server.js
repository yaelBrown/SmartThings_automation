/* 
  SmartThings Dev - https://developer-preview.smartthings.com/docs/sdks/getting-started-with-sdks
  SmartThings SDK - https://developer-preview.smartthings.com/docs/sdks/core
  Devices API - https://developer-preview.smartthings.com/docs/devices/device-basics/
*/ 

const { SmartThingsClient, BearerTokenAuthenticator } = require('@smartthings/core-sdk')
const client = new SmartThingsClient(new BearerTokenAuthenticator('bb33ca99-94f0-43f6-a9fb-1c2fb4a2486f'))

let hub = ''

client.locations.list().then(locations => {
  console.log(`Found ${locations.length} locations`)
  // locations.forEach(e => console.log(e))
})

client.devices.list().then(devices => {
  console.log(`${devices.length} devices`)
  devices.forEach(d => {
    // console.log(d)
    if (d.deviceId === '1525678d-f3b6-4851-8410-966261cdefd9') hub = d
  })
  console.log('this is the hub')
  console.log(hub.getHealth()) // Search for device specific commands for type Hub. 

})












