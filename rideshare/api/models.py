from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.
class Profile(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  username = models.CharField(max_length=50, primary_key=True)
  password = models.CharField(max_length=250)
  email = models.EmailField()
  bio = models.TextField(blank=True)
  profileimg = models.ImageField(upload_to = './static/profile_images', default = 'blank_profile_picture.png' )
  location = models.CharField(max_length=100,blank=True)

  def __str__(self):
    return self.user.username