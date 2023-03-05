from django.urls import path
from .import views

urlpatterns = [
    path('profiles', views.ProfileView.as_view({'get': 'list'}), name='profiles')
]
