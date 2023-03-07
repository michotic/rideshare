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

class ProfileListView(viewsets.ModelViewSet):
  serializer_class = ProfileSerializer
  queryset = Profile.objects.all()

# @api_view(['GET', 'POST'])
# def profile_list(request):
#   if request.method == 'GET':
#     profiles = Profile.objects.all()
#     serializer = ProfileSerializer(profiles, many = True)
#     return Response(serializer.data)
#   elif request.method == 'POST':
#     serializer = ProfileSerializer(data=request.data)
#     if serializer.is_valid():
#       serializer.save()
#       return Response(status=status.HTTP_201_CREATED)
#     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

# @api_view(['POST'])
# def create_account(request):
#    return
  


# Old views from Francis's mockup
# def signup(request):
#   if request.method == 'POST':
#     username = request.POST['username']
#     email = request.POST['email']
#     password = request.POST['password']
#     password2 = request.POST['password']
#     if password == password2:
#       if User.objects.filter(email = email).exists():
#         messages.info(request,"Email already exists")
#         return redirect('signup')
#       elif User.objects.filter(username = username).exists():
#         messages.info(request,"username already exists")
#         return redirect('signup')
#       else: 
#         user = User.objects.create_user(username = username, email = email, password = password)
#         user.save()
        
#         # log user in and redirect to settings page

#         # create a profile object for the new user
#         user_model = User.objects.get(username = username)
#         new_profile = Profile.objects.create(user = user_model, id_user = user_model.id)
#         new_profile.save()
#         return redirect('signup')


#     else:
#       messages.info(request, "Password doesn't matching")
#       return redirect('signup')
    
#   else:
#     return render(request,'signup.html')
  

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
