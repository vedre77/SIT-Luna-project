from django.urls import path
from users.views import GetUserProfile, ListAllUsers, SearchUser, GetUserSpecificProfile

urlpatterns = [
    path("me/", GetUserProfile.as_view()),
    path("users/list/", ListAllUsers.as_view()),
    path("users/", SearchUser.as_view()),  # in postman, "api/users/?search=<str:search_string>/"
    path("users/<int:pk>/", GetUserSpecificProfile.as_view())
]
