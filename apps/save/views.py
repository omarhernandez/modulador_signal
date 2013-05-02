 #encoding:utf-8
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse
from django.utils import simplejson
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def save(request):
 
 	print request.POST

  	#data =  simplejson.loads(request.body)

  #	print list(data["content"])

  	print "--------------------0000------------"

	response = HttpResponse('nada'  , content_type='plain/text')
	response['Content-Disposition'] = 'attachment; filename="signal.fsk"'
	return response
	#return response

 