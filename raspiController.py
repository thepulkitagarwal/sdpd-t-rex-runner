# python 2
from __future__ import print_function
from urllib2 import urlopen

# python 3
# from urllib.request import urlopen

def jump(ip='localhost'):
	content = urlopen('http://' + ip + ':3000/jump').read()
	print(content)

def testjump():
	import threading
	threading.Timer(0.5, testjump).start()
	jump()

# This is just to test if this is properly linked to the server
# Remove this
testjump() 

# Begin your code from here
