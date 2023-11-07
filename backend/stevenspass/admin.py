from django.contrib import admin
from .models import Run

# Register your models here.
@admin.register(Run)
class RunAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "category",
    )
