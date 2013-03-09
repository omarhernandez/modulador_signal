from django.conf.urls import patterns, include, url
from django.conf import settings
 

urlpatterns = patterns('',

    

	url(r'^' , include('apps.inicio.urls')) , #adding and registering urls path init  
 
)


#running media static files

if settings.DEBUG:
    urlpatterns += patterns('',
        url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
            'document_root': settings.MEDIA_ROOT,
        }),
    )