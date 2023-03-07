from django.urls import path, include
from rest_framework import routers
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView
from .import views

urlpatterns = [
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/redoc', SpectacularRedocView.as_view(url_name='schema')),
    path('api/profiles/', views.ProfileListView.as_view({'get': 'list'})),
    path('', views.MyReactView.as_view()),
    path('<path:path>', views.MyReactView.as_view())
]