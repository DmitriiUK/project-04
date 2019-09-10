from rest_framework  import serializers
from jwt_auth.serializers import UserSerializer

from .models import Bike, Brand, Type

class BikeSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)

    class Meta:
        model = Bike
        fields = 'id', 'title', 'brand', 'mainimage', 'slogan', 'mainbody', 'image0', 'image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12', 'image13', 'image14', 'image15', 'displacement', 'compressionRatio', 'bore', 'stroke', 'length', 'wheelbase', 'seatheight', 'clearance', 'trail', 'dryweight', 'fueltank', 'torque', 'torquerpm', 'horsepower', 'fuelconsumption', 'co2emissions', 'primarydrive', 'firstgear', 'secondgear', 'thirdgear', 'fourthgear', 'fifthgear', 'sixthgear', 'frontbrakes', 'rearbrakes', 'frontwheelmaterial', 'rearwheelmaterial', 'fronttyre', 'reartyre', 'types', 'year', 'user'

class BrandSerializer(serializers.ModelSerializer):

    class Meta:
        model = Brand
        fields = ('id', 'name', 'icon', 'country', )

class PopulatedBrandSerializer(BrandSerializer):

    bikes = BikeSerializer(many=True)

    class Meta(BrandSerializer.Meta):
        fields = ('id', 'name', 'icon', 'country', 'bikes',)


class TypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Type
        fields = ('id', 'name',)


class PopulatedBikeSerializer(BikeSerializer):

    brand = BrandSerializer()
    types = TypeSerializer(many=True)
