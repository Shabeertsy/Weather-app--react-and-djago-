from django.urls import path
from .views import UserRegisterAPIView,CustomTokenObtainPairView
from . import views


urlpatterns = [
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('register/', UserRegisterAPIView.as_view(), name='user_register'),
    

]
