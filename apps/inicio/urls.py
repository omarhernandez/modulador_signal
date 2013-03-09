#encoding:utf-8
from django.conf.urls.defaults import patterns,url

#create new branch inicio 
urlpatterns = patterns('apps.inicio.views',  #Init View

			url(r'^$' ,    'inicio' ,  name = 'path_inicio') ,  

			)