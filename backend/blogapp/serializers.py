# converts models to json
from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields=( 'id','blog_title','blog_image','blog_post','blog_author','date_published',)

class UserSerializer(serializers.ModelSerializer): 
    email=serializers.EmailField(required=True)  
    username=serializers.CharField(required=True)  
    password=serializers.CharField(min_length=8,write_only=True,required=True )  

    class Meta:
        model=User
        fields= ('email','username','password',)    
    
    def create(self, validated_data):  
        password=validated_data.pop('password', None) 
        instance=self.Meta.model(**validated_data)
        if (password is not None):
            instance.set_password(password)
        instance.save()
        return instance
    

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self,attribute):
        data=super(CustomTokenObtainPairSerializer,self).validate(attribute)
        data.update({'username':self.user.username})
        data.update({'email':self.user.email})
        return data


