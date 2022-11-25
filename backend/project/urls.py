from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework_simplejwt import views
from project import settings

schema_view = get_schema_view(
   openapi.Info(
      title="Luna and Tuna API",
      default_version='v20000000',
      description="Luna app API documentation",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="miri.yoo.dev@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


urlpatterns = [
    path("backend/api/admin/", admin.site.urls),

    # Restaurants
    path("backend/api/", include('restaurants.urls')),

    #  Users
    path("backend/api/", include('users.urls')),

    # Reviews & Comments
    path("backend/api/", include('reviews.urls')),

    # JWT
    path('backend/token/', views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/token/refresh/', views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/token/verify/', views.TokenVerifyView.as_view(), name='token_verify'),

    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
