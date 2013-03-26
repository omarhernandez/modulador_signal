#Concatenate a list of files into a single script:
#coffee --join project.js --compile src/*.coffee
class vehicle

	constructor:(@name)->

	move:(miles)->
	#alternative prototype js

		console.log @name , "drove",miles , "miles"


class VWBug extends vehicle
	
	move: ->

		console.log "crisin.."

		super 100

class Truck extends vehicle

	move: ->

		console.log "houlin.."

		super 50


mater = new Truck "mater"

herbie =  new VWBug "herbie"


mater.move()

herbie.move()