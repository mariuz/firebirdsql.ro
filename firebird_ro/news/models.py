from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField(max_length=140)
    body = models.TextField()
    url = models.URLField()
    publication_date = models.DateField()

    def __unicode__(self):
    	return self.title
    class Meta:
        verbose_name_plural = 'News'
class Blogs(models.Model):
    title = models.CharField(max_length=140)
    body = models.TextField()
    url = models.URLField()
    publication_date = models.DateField()

    def __unicode__(self):
        return self.title
class Articles(models.Model):
    title = models.CharField(max_length=140)
    body = models.TextField()
    url = models.URLField()
    publication_date = models.DateField()

    def __unicode__(self):
        return self.title

