from django.contrib.auth import get_user_model
from rest_framework import filters
from rest_framework.generics import RetrieveUpdateAPIView, ListAPIView, RetrieveAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated
from users.serializers import UserSerializer


User = get_user_model()


# /api/me/
# GET: Get user profile
# PATCH: Update the user profile
class GetUserProfile(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_queryset(self):
        queryset = User.objects.all()
        return queryset

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, id=self.request.user.id)
        return obj


# /api/users/list/
# GET: Get all users
class ListAllUsers(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


# /api/users/?search=<str:search_string>/
# GET: Search for a user (retrieve all the users that include search_string)
class SearchUser(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username']


# api/users/<int:pk>/
# GET: Get specific user profile
class GetUserSpecificProfile(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
