from django.conf.urls.defaults import *
from firebird_ro.views import *
from django.contrib import admin
admin.autodiscover()


urlpatterns = patterns('',
    # Example:
    # (r'^firebird_ro/', include('firebird_ro.foo.urls')),

    # Uncomment the admin/doc line below and add 'django.contrib.admindocs' 
    # to INSTALLED_APPS to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    (r'^admin/', include(admin.site.urls)),
    ('^$', index),
    ('^indexold/$', indexold),
    ('^download/$', download),
    ('^firebird-2.1.3-a-fost-lansat/$', firebird213),
    ('^comunitatea-firebird-romania/$', comunitatea),
    ('^resurse/$', resurse),
    ('^suport/$', suport),
    ('^sitemap/$', sitemap),
    ('^sgdb-firebird/$', sgdb),
    (r'^news/$', 'firebird_ro.news.views.index'),
    (r'^news/(?P<news_id>\d+)/$', 'firebird_ro.news.views.detail'),




    
)
