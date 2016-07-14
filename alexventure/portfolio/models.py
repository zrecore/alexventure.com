from django.db import models

# Create your models here.

class Category(models.Model):
    name            = models.CharField( max_length = 110 )
    slug            = models.CharField( max_length = 110 )
    published       = models.IntegerField( default = 0 )
    parent          = models.ForeignKey( 'self', on_delete = models.CASCADE, blank = True, null = True, default = None )
    # ...to string helper
    def __str__(self):
        return self.name

class Article(models.Model):
    title           = models.CharField( max_length = 110 )
    slug            = models.CharField( max_length = 110 )
    published       = models.IntegerField( default = 0 )
    creation_date   = models.DateTimeField( 'date created' )
    published_date  = models.DateTimeField( 'date published' )
    edit_date       = models.DateTimeField( 'date edited' )
    category        = models.ForeignKey( Category, on_delete = models.CASCADE )
    content_file    = models.CharField( max_length = 255 )
    # ...to string helper
    def __str__(self):
        return self.title

class Tag(models.Model):
    name            = models.CharField( max_length = 32 )
    slug            = models.CharField( max_length = 32 )
    # ...to string helper
    def __str__(self):
        return self.name
