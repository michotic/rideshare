from django.urls import path, include
from rest_framework import routers
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView
from .import views

router = routers.DefaultRouter()
router.register('profile', views.ProfileViewSet)

urlpatterns = [
    # API Addreses
    path('api/', include(router.urls)),
    path('api/schema.yml', SpectacularAPIView.as_view(), name='schema'),
    path('api/schema/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    # React App
    path('', views.MyReactView.as_view()),
    path('<path:path>', views.MyReactView.as_view())
]

