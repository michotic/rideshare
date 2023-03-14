from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib.auth.models import User, auth
from django.contrib import messages

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status

from .models import Profile, RidePosting
from .serializers import ProfileSerializer, RidePostingSerializer

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
          return Response({"result": "email_exists"})
        elif User.objects.filter(username = username).exists():
          return Response({"result": "username_exists"})
        else: 
          # Create Django User
          new_user = User.objects.create_user(username = username, email = email, password = password)
          new_user.save()
          user_model = User.objects.get(username = username)
          # Create profile referencing Django user
          profile_model = Profile.objects.create(user=user_model, username=username)
          profile_model.email = email
          profile_model.password = ""
          profile_model.save()
          print("User made with username, email :", username, email)
          return Response({"result": "account_made"})

  def retrieve(self, request, *args, **kwargs):
    user_model = User.objects.get(username=request.user)
    profile = Profile.objects.get(username=request.user)
    return Response({"authenticated": user_model.is_authenticated, "user_id": user_model.pk, "username": profile.pk})
        
class RidePostingViewSet(viewsets.ModelViewSet):
  queryset = RidePosting.objects.all()
  serializer_class = RidePostingSerializer

  def perform_create(self, serializer):
        # Get data from the serializer
        data = serializer.data
        ride_id = len(RidePosting.objects.all()) + 1
        start = data["point_a"]
        end = data["point_b"]
        is_offer = data["is_offer"]
        num_seats = data["seats"]
        num_bags = data["bags"]
        made_by = data["creator"]
        new_ride = RidePosting.objects.create(order_id=ride_id, point_a = start, point_b=end, is_offer=is_offer, seats=num_seats, bags=num_bags, creator=made_by)
        new_ride.save()
        return Response(data)