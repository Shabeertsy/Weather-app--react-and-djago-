from django.db import models
from django.contrib.auth.models import User


class UserRegister(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=False)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.name




