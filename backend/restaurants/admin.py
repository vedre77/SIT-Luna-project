from django.contrib import admin
from restaurants.models import Restaurant


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    readonly_fields = ()

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('name', 'category', 'price_level')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': ('name', 'category')}),
        ('Location', {'fields': ('country', 'street', 'city', 'zip')}),
        ('Contacts', {'fields': ('website', 'phone', 'email')}),
        ('Information', {'fields': ('opening_hours', 'price_level', 'image')}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'name', 'category')
    ordering = ('-id', )
