from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields=('blog_title','blog_post','blog_author','date_published',)
