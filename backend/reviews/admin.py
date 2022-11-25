from django.contrib import admin
from reviews.models import Review, Comment


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    readonly_fields = ('created',)

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('creator', 'text_content', 'rating', 'restaurant')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': 'creator'}),
        ('Content', {'fields': ('text_content', 'rating')}),
        ('Restaurant', {'fields': 'restaurant'}),
        ('Social status', {'fields': 'liked_by'}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'creator', 'restaurant')
    ordering = ('-id',)


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    readonly_fields = ('created', 'modified', 'liked_by')

    # fields shown when creating a new instance
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('commented_by', 'commented_on', 'text_content')
        }),
    )

    # fields when reading / updating an instance
    field_sets = (
        (None, {'fields': 'commented_by'}),
        ('Content', {'fields': ('text_content')}),
        ('Review', {'fields': 'commented_on'}),
        ('Social status', {'fields': 'liked_by'}),
    )

    # fields which are shown when looking at a list of instances
    list_display = ('id', 'commented_by', 'commented_on')
    ordering = ('-id',)
