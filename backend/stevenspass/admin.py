from django.contrib import admin
from .models import Run, CategoryVO, Video


# Register your models here.
@admin.register(Run)
class RunAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "category",
    )


@admin.register(CategoryVO)
class CategoryVOAdmin(admin.ModelAdmin):
    list_display = (
        "category",
    )


@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "src",
        "vote",
        "run",
    )
