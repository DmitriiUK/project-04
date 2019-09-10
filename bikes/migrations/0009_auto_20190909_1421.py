# Generated by Django 2.2.5 on 2019-09-09 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bikes', '0008_auto_20190909_1358'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bike',
            old_name='image',
            new_name='mainimage',
        ),
        migrations.AddField(
            model_name='bike',
            name='mainbody',
            field=models.CharField(default='null', max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bike',
            name='slogan',
            field=models.CharField(default='null', max_length=200),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='bike',
            name='frontwheelmaterial',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='bike',
            name='horsepower',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='bike',
            name='rearwheelmaterial',
            field=models.CharField(max_length=30),
        ),
    ]