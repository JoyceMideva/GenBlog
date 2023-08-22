from rest_framework import serializers
from .models import Blog

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields=( 'id','blog_title','blog_image','blog_post','blog_author','date_published',)
