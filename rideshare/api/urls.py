from django.urls import path
from .import views

urlpatterns = [
    path(r'', views.MyReactView.as_view(), name='react-app'),
    path(r'<path:path>', views.MyReactView.as_view(), name='react-app-with-path'),
    # path('profiles', views.ProfileView.as_view({'get': 'list'}), name='profiles')
]
