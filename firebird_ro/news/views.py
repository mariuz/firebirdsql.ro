# Create your views here.
from django.http import HttpResponse
from django.template import Context, loader
from firebird_ro.news.models import *
def index(request):
    latest_news_list = News.objects.raw('SELECT a.ID, a.TITLE, a.BODY, a.URL, a.PUBLICATION_DATE FROM NEWS_NEWS a order by id desc')[:10]
    t = loader.get_template('news/index.html')    
    c = Context({
        'latest_news_list': latest_news_list,
    })
    #output = '<br> '.join([n.title for n in latest_news_list])
    #return HttpResponse(output)
    return HttpResponse(t.render(c))
def detail(request, news_id):
    selected_news = News.objects.get(id=news_id)
    return HttpResponse("You're looking at news %s." % selected_news.body)
