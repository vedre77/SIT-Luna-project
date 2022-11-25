from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView, ListCreateAPIView
from restaurants.models import Restaurant
from restaurants.permissions import IsObjectOwnerOrAdmin
from restaurants.serializers import RestaurantSerializer


User = get_user_model()


# /api/restaurants/
# GET: get a list of all restaurants
class RestaurantList(ListAPIView):
    queryset = Restaurant.objects.all().order_by('-created')
    serializer_class = RestaurantSerializer


# /api/restaurants/new/
# POST: Create a new restaurant
class CreateNewRestaurant(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


# /api/restaurants/<int:id>/
# GET: Get the details of a restaurant by providing the id of the restaurant
# PATCH: Update a restaurant by id (only by owner or restaurant admin)
# DELETE: Delete a restaurant by id (only by owner or restaurant admin)
class RestaurantDetailsUpdateDelete(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurant.objects.all()
    permission_classes = [IsObjectOwnerOrAdmin]


# GET: Get the all the restaurants created by a specific user in chronological order
# /api/restaurants/user/<int:user_id>/
class GetUserCreatedRestaurant(ListCreateAPIView):
    serializer_class = RestaurantSerializer
    lookup_url_kwarg = 'user_id'

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Restaurant.objects.filter(creator=user_id).order_by("-created")


# /api/restaurants/category/<int:category_id>/
# GET: Get the all the restaurants by category
class GetRestaurantsByCategory(ListAPIView):
    pass
