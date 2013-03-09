 #encoding:utf-8
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponse


def inicio(request):
 
 
	ctx = {

			'menu_inicio' : True ,

		  }
 

	return render_to_response('inicio/inicio.jade',ctx,  context_instance = RequestContext(request)  )


