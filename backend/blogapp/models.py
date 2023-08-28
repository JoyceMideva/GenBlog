from django.db import models
from django.utils import timezone

# Create your models here.
def upload_to(instance,filename):
    return "blogs/{filename}".format(filename=filename)

class Blog(models.Model):
    blog_title=models.CharField(max_length=150)
    blog_post=models.TextField()
    blog_image=models.ImageField(("image"),upload_to=upload_to,default="blogs/default.png")
    blog_author=models.CharField(max_length=30,blank=True)
    date_published=models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.blog_title  



    
     






















