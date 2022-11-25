from rest_framework import serializers
from restaurants.serializers import RestaurantSerializer
from reviews.models import Review, Comment
from users.serializers import UserSerializer


class ReviewSerializer(serializers.ModelSerializer):
    liked_by = serializers.StringRelatedField(many=True)

    class Meta:
        model = Review
        fields = '__all__'

    # respond with user and restaurant details:
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['creator'] = UserSerializer(instance.creator).data
        representation['restaurant'] = RestaurantSerializer(instance.restaurant).data
        return representation


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

    # respond with user and review details:
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['commented_by'] = UserSerializer(instance.commented_by).data
        representation['commented_on'] = ReviewSerializer(instance.commented_on).data
        return representation
