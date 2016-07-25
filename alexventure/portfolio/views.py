from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def index(self, context=None, request=None):
    #template = loader.get_template('portfolio/index.html')
    #context = {}
    return render(request, 'portfolio/index.html');