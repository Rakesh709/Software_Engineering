//console.log are logger and write the logs in file 
//events - socker event driven artc : if something happend trigger it 
// pm2 emxaple logger 
//insomia

const fs =require('fs')
const os =require('os')

// show the class
const EventEmitter= require('events')
const { log } = require('console')

class Logger extends EventEmitter{
    log(message){
        this.emit('message',{message})
    }
}

const logger = new Logger()
const logFile= './eventlog.txt'

const logToFile = (event)=>{
    const logMessage =`${new Date().toISOString()} - ${event.message}`
    fs.appendFileSync(logFile,logMessage)
}

// the log file 
//listning for the event for the message event
logger.on('message',logToFile)
//logger is executing because of **this.emit('message',{message})**

//emit the event with setIvent
setInterval(()=>{
    const memoryUsage = (os.freemem()/ os.totalmem())*1000
    logger.log(`currentmemory usage: ${memoryUsage.toFixed(2)}`)
},3000)


logger.log("Application started")
logger.log("Application event occured")


//* msg name for emmiter and listner need be same 