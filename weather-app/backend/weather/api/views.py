from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from .serializers import UserRegisterSerializer
from .models import UserRegister
from .utils import generate_random_password,send_password_email
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView




class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['name'] = user.username
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer




# registration api view

class UserRegisterAPIView(GenericAPIView):
    serializer_class = UserRegisterSerializer

    def post(self, request):
        name = request.data.get('name')
        email = request.data.get('email')
        phone= request.data.get('phone')

        if User.objects.filter(username=name).exists():
            return Response({'message': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            password=generate_random_password()

            send_password_email([email],password,name)

        user = User.objects.create_user(
            username=name,
            password=password,
        )


        user_register = UserRegister.objects.create(
            user=user,
            name=name,
            phone=phone,
            email=email,
            
        )


        serializer = self.serializer_class(user_register)
        return Response({'data': serializer.data, 'message': 'User registered successfully', 'success': 1}, status=status.HTTP_201_CREATED)
