from django.shortcuts import HttpResponse

# This is the view that you imported in the frontend/urls.py


def indexView(request):
    return HttpResponse("Any kind of HTML Here")
# Create your views here.
