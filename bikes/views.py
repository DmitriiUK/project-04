from django.http import Http404
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly
from .models import Bike, Brand
from .serializers import BikeSerializer, BrandSerializer, PopulatedBikeSerializer, PopulatedBrandSerializer

class BikeViewSet(viewsets.ModelViewSet):
    queryset = Bike.objects.all()
    serializer_class = PopulatedBikeSerializer

class BikeList(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Bike.objects.all()
    serializer_class = BikeSerializer

    def get(self, _request):
        bikes = Bike.objects.all()
        serializer = PopulatedBikeSerializer(bikes, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BikeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            bike = serializer.instance
            serializer = PopulatedBikeSerializer(bike)
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)


class BikeDetail(APIView):

    permission_classes = (IsOwnerOrReadOnly,)

    def get_bike(self, pk):
        try:
            bike = Bike.objects.get(pk=pk)
        except Bike.DoesNotExist:
            raise Http404

        return bike

    def get(self, _request, pk):
        bike = self.get_bike(pk)

        serializer = BikeSerializer(bike)
        return Response(serializer.data)

    def put(self, request, pk):
        bike = self.get_bike(pk)

        serializer = BikeSerializer(bike, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)

    def delete(self, _request, pk):
        bike = self.get_bike(pk)

        bike.delete()
        return Response(status=204)


class BrandViewSet(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = PopulatedBrandSerializer

class BrandListView(APIView):

    def get(self, _request):
        brand = Brand.objects.all()
        serializer = PopulatedBrandSerializer(brand, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BrandSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            brand = serializer.instance
            serializer = PopulatedBrandSerializer(brand)
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=422)

class BrandDetailView(APIView):

    def get(self, _request, pk):
        brand = Brand.objects.get(pk=pk)
        serializer = BrandSerializer(brand)
        return Response(serializer.data)

    def put(self, request, pk):
        brand = Brand.objects.get(pk=pk)
        serializer = BrandSerializer(brand, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        return Response(serializer.errors, status=422)

    def delete(self, _request, pk):
        brand = Brand.objects.get(pk=pk)
        brand.delete()

        return Response(status=204)
