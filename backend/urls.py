from django.urls import path, include
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers

from bikes.views import BikeViewSet, BrandViewSet

router = routers.DefaultRouter()
router.register(r'bikes', BikeViewSet, base_name='bikes')
router.register(r'brands', BrandViewSet, base_name='brands')

urlpatterns = [
    path('auth/', include('rest_framework.urls')),
    path(r'api/', include(router.urls)),
    path('', include('jwt_auth.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
