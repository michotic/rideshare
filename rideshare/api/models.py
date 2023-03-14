from django.db import models
from django.contrib.auth import get_user_model
from datetime import date

User = get_user_model()
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
  
class RidePosting(models.Model):
  order_id = models.IntegerField(primary_key=True)
  point_a = models.CharField(max_length=150)
  point_b = models.CharField(max_length=150)
  is_offer = models.BooleanField()
  seats = models.IntegerField()
  bags = models.IntegerField()
  creator = models.CharField(max_length=50)
  date = models.DateField(default=date.today)