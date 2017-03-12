import urllib2

def jump():
	content = urllib2.urlopen('http://localhost:3000/jump').read()
	print content

def testjump():
	import threading
	threading.Timer(0.5, testjump).start()
	jump()

# This is just to test if this is properly linked to the server
# Remove this
testjump() 

# Begin your code from here
