from django.db import models
from django.utils import timezone

# Create your models here.
class Blog(models.Model):
    blog_title=models.CharField(max_length=150)
    blog_post=models.TextField()
    blog_author=models.CharField(max_length=30)
    date_published=models.DateTimeField(default=timezone.now())

    def __str__(self):
        return self.blog_title     