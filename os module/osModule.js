const os= require('os')
console.log("type:",os.type());
console.log("arch:",os.arch());
console.log("platform:",os.platform());
console.log("release:",os.release());
console.log("release-version:",os.version());
console.log("used-time:",os.uptime());
console.log("user-info:",os.userInfo());
console.log("total ram memory:",os.totalmem());
console.log("free ram memory:",os.freemem());
console.log("cpu datils:",os.cpus());
console.log("network interface details:",os.networkInterfaces());