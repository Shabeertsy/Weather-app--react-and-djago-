from django.core.mail import send_mail
from django.conf import settings
import random
import string

# generate random passwords

def generate_random_password(length=10):
    characters = string.ascii_letters + string.digits
    password = ''.join(random.choice(characters) for _ in range(length))
    return password



# send to user email address

def send_password_email(email, password):
    subject = 'Welcome to YourApp!'
    message = f'Your password for the account {email[0]} is: {password}'
    from_email = settings.EMAIL_HOST_USER
    recipient_list = ['admgamingkerala@gmail.com']
    send_mail(subject, message, from_email, recipient_list)
