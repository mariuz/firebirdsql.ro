from django.http import HttpResponse
from django.template.loader import get_template
from django.db import *
from django.template import Context
import datetime
import django
from firebird_ro.news.models import *
now = datetime.datetime.now()

def index(request):
    t = get_template('index.html')
    current_section = 'Start'
    page_title = 'Prima Pagina'
    latest_news_list = News.objects.raw('SELECT a.ID, a.TITLE, a.BODY, a.URL, a.PUBLICATION_DATE FROM NEWS_NEWS a order by id desc')[:10]
    html = t.render(Context({'latest_news_list': latest_news_list, 'current_section':current_section,'page_title':page_title,'django_version':django.VERSION}))
    return HttpResponse(html)

def download(request):
    t = get_template('download.html')
    current_section = 'Download'
    page_title = 'Pagina de Download'
    html = t.render(Context({'current_date': now,'current_section':current_section,'page_title':page_title,'django_version':django.VERSION}))
    return HttpResponse(html)
def comunitatea(request):
    t = get_template('comunitatea-firebird-romania.html')
    current_section = 'Comunitatea Firebird Romania'
    page_title = 'Comunitatea Firebird Romania'
    html = t.render(Context({'current_date': now,'current_section':current_section,'page_title':page_title, 'django_version':django.VERSION}))
    return HttpResponse(html)
def firebird213(request):
    t = get_template('firebird-2.1.3-a-fost-lansat.html')
    current_section = 'Firebird a fost lansat'
    page_title = 'Comunitatea Firebird Romania'
    html = t.render(Context({'current_date': now,'current_section':current_section,'page_title':page_title, 'django_version':django.VERSION}))
    return HttpResponse(html)
def suport(request):
    t = get_template('suport.html')
    current_section = 'Suport si Ajutor'
    page_title = 'Suport si Ajutor'
    html = t.render(Context({'current_date': now,'current_section':current_section,'page_title':page_title, 'django_version':django.VERSION}))
    return HttpResponse(html)
def sitemap(request):
    t = get_template('sitemap.html')
    current_section = 'Sitemap OLD'
    page_title = 'Sitemap OLD must be updated'
    html = t.render(Context({'current_date': now,'current_section':current_section,'page_title':page_title, 'django_version':django.VERSION}))
    return HttpResponse(html)
def resurse(request):
    t = get_template('resurse.html')
    current_section = 'Resurse'
    page_title = 'Resurse'
    html = t.render(Context({'current_date': now,'current_section':current_section,'page_title':page_title,'django_version':django.VERSION}))
    return HttpResponse(html)
def sgdb(request):
    t = get_template('sgdb-firebird.html')
    current_section = 'Resurse'
    page_title = 'Resurse'
    html = t.render(Context({'current_date': now,'current_section':current_section,'page_title':page_title,'django_version':django.VERSION}))
    return HttpResponse(html)
