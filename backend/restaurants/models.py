from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


class Restaurant(models.Model):
    CATEGORIES = [
        ('I', 'Italian'),
        ('V', 'Vegetarian'),
        ('B', 'Burger'),
        ('A', 'Asian'),
    ]

    PRICES = [
        ('$', 'cheap'),
        ('$$', 'medium'),
        ('$$$', 'expensive'),
        ('$$$$', 'super expensive')
    ]

    name = models.CharField(max_length=75)
    creator = models.ForeignKey(User, related_name='created_restaurants', on_delete=models.CASCADE, null=True)
    category = models.CharField(max_length=100, choices=CATEGORIES)
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=250)
    city = models.CharField(max_length=70)
    zip = models.IntegerField()
    website = models.CharField(max_length=250)
    phone = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    opening_hours = models.TextField()
    price_level = models.CharField(max_length=10, choices=PRICES)
    image = models.FileField(upload_to='uploads/', blank=True)
    created = models.DateTimeField(auto_now_add=True, blank=True)
