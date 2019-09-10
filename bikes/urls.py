from django.urls import path
from .views import BikeList, BikeDetail, BrandListView, BrandDetailView

urlpatterns = [
    path('bikes/', BikeList.as_view(), name='bikes-list'),
    path('bikes/<int:pk>/', BikeDetail.as_view(), name='bikes-detail'),
    path('brands/', BrandListView.as_view(), name='brands-list'),
    path('brands/<int:pk>/', BrandDetailView.as_view(), name='brands-detail')

]
