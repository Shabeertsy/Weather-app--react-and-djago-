from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class UserRegister(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    mobile=models.CharField(max_length=255,blank=False,null=False)
    full_name=models.CharField(max_length=255,blank=False,null=False)
    username=models.CharField(max_length=255,blank=False,null=False)
    password=models.CharField(max_length=255,blank=False,null=False)

    def __str__(self):
        return self.mobile


