from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserRegister

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserRegister
        fields='__all__'
    def create(self,validated_data):
        return UserRegister.objects.create(**validated_data)
    
