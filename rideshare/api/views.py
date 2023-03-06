from django.shortcuts import render, redirect
from rest_framework import viewsets
from django.views.generic import TemplateView
from .serializers import ProfileSerializer
from .models import Profile

from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages

# Create your views here.

# View for our React Application
class MyReactView(TemplateView):
    template_name = 'react-app.html'

    def get_context_data(self, **kwargs):
        return {'context_variable': 'value'}

def signup(request):
  if request.method == 'POST':
    username = request.POST['username']
    email = request.POST['email']
    password = request.POST['password']
    password2 = request.POST['password']
    if password == password2:
      if User.objects.filter(email = email).exists():
        messages.info(request,"Email already exists")
        return redirect('signup')
      elif User.objects.filter(username = username).exists():
        messages.info(request,"username already exists")
        return redirect('signup')
      else: 
        user = User.objects.create_user(username = username, email = email, password = password)
        user.save()
        
        # log user in and redirect to settings page

        # create a profile object for the new user
        user_model = User.objects.get(username = username)
        new_profile = Profile.objects.create(user = user_model, id_user = user_model.id)
        new_profile.save()
        return redirect('signup')


    else:
      messages.info(request, "Password doesn't matching")
      return redirect('signup')
    
  else:
    return render(request,'signup.html')
  

def signin(request):
  if request.method == "POST":
    username = request.POST['username']
    password = request.POST['password']

    user = auth.authenticate(username = username, password=password)

    if user is not None:
      auth.login(request,user)
      return redirect('/')
    else:
      messages.info(request,'Credentials invalid')
      return redirect('signin')

  else:
    return render(request,'signin.html')
