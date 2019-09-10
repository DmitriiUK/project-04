from django.db import models
from django.contrib.auth.models import User

class Brand(models.Model):
    name = models.CharField(max_length=20)
    icon = models.ImageField(upload_to='media/brands/', max_length=200, null=True, blank=True)
    country = models.CharField(max_length=40)

    def __str__(self):
        return self.name


class Type(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Bike(models.Model):
    title = models.CharField(max_length=50)
    brand = models.ForeignKey(Brand, related_name='bikes', on_delete=models.CASCADE)
    mainimage = models.ImageField(upload_to='media/bikes/', max_length=200, null=True, blank=True, )
    slogan = models.CharField(max_length=200)
    mainbody = models.CharField(max_length=500)
    image0 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image1 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image2 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image3 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image4 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image5 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image6 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image7 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image8 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image9 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image10 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image11 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image12 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image13 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image14 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    image15 = models.ImageField(upload_to='media/bikes/rotation', max_length=200, null=True, blank=True, )
    types = models.ManyToManyField(Type, related_name='bikes', blank=True)
    displacement = models.CharField(max_length=20)
    compressionRatio = models.CharField(max_length=20)
    bore = models.CharField(max_length=20)
    stroke = models.CharField(max_length=20)
    length = models.CharField(max_length=20)
    wheelbase = models.CharField(max_length=20)
    seatheight = models.CharField(max_length=20)
    clearance = models.CharField(max_length=20)
    trail = models.CharField(max_length=20)
    dryweight = models.CharField(max_length=20)
    fueltank = models.CharField(max_length=20)
    torque = models.CharField(max_length=20)
    torquerpm = models.CharField(max_length=20)
    horsepower = models.CharField(max_length=50)
    fuelconsumption = models.CharField(max_length=20)
    co2emissions = models.CharField(max_length=20)
    primarydrive = models.CharField(max_length=20)
    firstgear = models.CharField(max_length=20)
    secondgear = models.CharField(max_length=20)
    thirdgear = models.CharField(max_length=20)
    fourthgear = models.CharField(max_length=20)
    fifthgear = models.CharField(max_length=20)
    sixthgear = models.CharField(max_length=20)
    frontbrakes = models.CharField(max_length=20)
    rearbrakes = models.CharField(max_length=20)
    frontwheelmaterial = models.CharField(max_length=50)
    rearwheelmaterial = models.CharField(max_length=50)
    fronttyre = models.CharField(max_length=55)
    reartyre = models.CharField(max_length=55)
    year = models.IntegerField()
    user = models.ForeignKey(User, related_name='bikes', null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.title}'
