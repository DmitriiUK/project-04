from django.contrib import admin
from bikes.models import Bike, Brand, Type
# Register your models here.
admin.site.register(Bike)
admin.site.register(Brand)
admin.site.register(Type)
