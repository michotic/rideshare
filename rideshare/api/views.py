from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib.auth.models import User, auth
from django.contrib import messages

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status

from .models import Profile
from .serializers import ProfileSerializer

# Create your views here.

# View for our React Application
class MyReactView(TemplateView):
  template_name = 'react-app.html'

  def get_context_data(self, **kwargs):
      return {'context_variable': 'value'}

# View for Profile CRUD API
class ProfileViewSet(viewsets.ModelViewSet):
  queryset = Profile.objects.all()
  serializer_class = ProfileSerializer

  # perform_create(...) runs whenever a createProfile(...) method is called from our API
  def perform_create(self, serializer):
        # Get data from the serializer
        data = serializer.data
        username = data['username']
        email = data['email']
        password = data['password']

        if User.objects.filter(email = email).exists():
          # Email already exists
          pass
        elif User.objects.filter(username = username).exists():
          # Username already exists
          pass
        else: 
          # Create Django User
          user = User.objects.create_user(username = username, email = email, password = password)
          user.save()
          user_model = User.objects.get(username = username)
          # Create profile referencing Django user
          profile_model = Profile.objects.create(user = user_model)
          profile_model.username = username
          profile_model.email = email
          profile_model.password = ""
          profile_model.save()
          print("User made with username, email :", username, email)

  def retrieve(self, request, *args, **kwargs):
    user_model = User.objects.get(username=request.user)
    profile = Profile.objects.get(username=request.user)
    return Response(user_model.is_authenticated)
          

# def signin(request):
#   if request.method == "POST":
#     username = request.POST['username']
#     password = request.POST['password']

#     user = auth.authenticate(username = username, password=password)

#     if user is not None:
#       auth.login(request,user)
#       return redirect('/')
#     else:
#       messages.info(request,'Credentials invalid')
#       return redirect('signin')

#   else:
#     return render(request,'signin.html')
