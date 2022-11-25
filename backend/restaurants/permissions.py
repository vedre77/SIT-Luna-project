from rest_framework.permissions import BasePermission, SAFE_METHODS


class IsObjectOwnerOrAdmin(BasePermission):
    restricted_methods = ['PATCH', 'DELETE']

    def has_permission(self, request, view):
        if request.user.is_authenticated:
            return True

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True
        elif obj.creator == request.user or request.user.is_superuser:
            return True
        elif request.user.is_staff and request.method not in self.restricted_methods:
            return True
        else:
            return False
