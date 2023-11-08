from django.urls import path
from .views import (
    api_list_runs,
    api_list_videos,
    api_list_run_videos,
)


urlpatterns = [
    path("runs/", api_list_runs, name="api_list_runs"),
    path("videos/", api_list_videos, name="api_list_videos"),
    path("videos/<int:id>/", api_list_run_videos, name="api_list_run_videos"),
]
