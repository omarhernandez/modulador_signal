#encoding:utf-8
from django.conf.urls.defaults import patterns,url

#create new branch inicio 
urlpatterns = patterns('apps.save.views',  #Init View

			url(r'^save/$' ,    'save' ,  name = 'path_save') ,  

			)