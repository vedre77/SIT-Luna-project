from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=70)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    password = models.CharField(max_length=250)
    location = models.TextField()
    phone = models.CharField(max_length=100)
    about_me = models.TextField()
    thing_i_love = models.TextField()
    date_joined = models.DateField(auto_now_add=True)
    profile_pic = models.ImageField()
