from django.contrib.auth import get_user_model
from django.core import validators
from django.db import models
from restaurants.models import Restaurant

User = get_user_model()


class Review(models.Model):
    creator = models.ForeignKey(to=User, related_name='reviews', on_delete=models.CASCADE)
    text_content = models.TextField()
    rating = models.IntegerField(validators=[validators.MinValueValidator(1), validators.MaxValueValidator(5)])
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    restaurant = models.ForeignKey(to=Restaurant, related_name='reviews', on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(to=User, related_name='liked_reviews')


class Comment(models.Model):
    commented_by = models.ForeignKey(to=User, related_name='comments', on_delete=models.CASCADE)
    commented_on = models.ForeignKey(to=Review, related_name='review_comments', on_delete=models.CASCADE)
    text_content = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    liked_by = models.ManyToManyField(to=User, related_name='liked_comments')
