from rest_framework import serializers
from restaurants.models import Restaurant
from users.serializers import UserSerializer


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['creator'] = UserSerializer(instance.creator).data
        return representation
