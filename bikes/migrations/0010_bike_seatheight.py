# Generated by Django 2.2.5 on 2019-09-09 14:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0009_auto_20190909_1421'),
    ]

    operations = [
        migrations.AddField(
            model_name='bike',
            name='seatheight',
            field=models.CharField(default='null', max_length=20),
            preserve_default=False,
        ),
    ]
