from django.shortcuts import render
from .models import Blog
from rest_framework import status,permissions,viewsets
from .serializers import BlogSerializer,UserSerializer,CustomTokenObtainPairSerializer
from rest_framework.views import APIView 
from rest_framework.response import Response
from django.http import Http404
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.
class BlogView(APIView):
    def get(self,request,format=None):
        blogs=Blog.objects.all()
        serializers=BlogSerializer(blogs, many=True)
        return Response(serializers.data)
    

    def post(self,request,format=None):
        serializers=BlogSerializer(data=request.data)
        if (serializers.is_valid()):
            serializers.save()
            return Response(serializers.data,status=status.HTTP_201_CREATED)
        return Response(serializers.errors,status=status.HTTP_400_BAD_REQUEST)
    

class SingleBlogView(APIView):
    def get_single_blog(self,id):
        try:
            return Blog.objects.get(id=id)
        except Blog.DoesNotExist: 
            raise Http404 
        
    def get(self,request, id):
        blog=self.get_single_blog(id)
        serializer=BlogSerializer(blog)
        return Response(serializer.data)
    
    def put(self,request,id):
        blog=self.get_single_blog(id=id)
        serializer=BlogSerializer(blog,data=request.data)

        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def delete (self,request,id) :
        blog=self.get_single_blog(id=id)
        blog.delete()  
        return Response(status=status.HTTP_204_NO_CONTENT) 

class UserView(APIView):
    permission_classes=(permissions.AllowAny,) 
    authentication_classes=()  

    def post(self,request,format='json'):
        serializer=UserSerializer(data=request.data) 
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


class CustomTokenObtainpairview(TokenObtainPairView):
    serializer_class=CustomTokenObtainPairSerializer
    





        

            
