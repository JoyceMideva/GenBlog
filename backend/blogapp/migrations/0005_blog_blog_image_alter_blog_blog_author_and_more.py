# Generated by Django 4.2.4 on 2023-08-21 13:51

import blogapp.models
import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogapp', '0004_alter_blog_date_published'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='blog_image',
            field=models.ImageField(default='blogs/default.png', upload_to=blogapp.models.upload_to, verbose_name='image'),
        ),
        migrations.AlterField(
            model_name='blog',
            name='blog_author',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='blog',
            name='date_published',
            field=models.DateTimeField(default=datetime.datetime(2023, 8, 21, 13, 51, 12, 815975, tzinfo=datetime.timezone.utc)),
        ),
    ]
