from django.urls import path
from .views import (
    api_list_runs,
    api_list_videos,
    api_list_run_videos,
    api_create_new_user,
    api_like_video,
    api_dislike_video
)


urlpatterns = [
    path("runs/", api_list_runs, name="api_list_runs"),
    path("videos/", api_list_videos, name="api_list_videos"),
    path("videos/<int:id>/", api_list_run_videos, name="api_list_run_videos"),
    path("videos/like/<int:video_id>/", api_like_video, name="api_like_video"),
    path("videos/dislike/<int:video_id>/",
         api_dislike_video,
         name="api_dislike_video"),
    path("user/", api_create_new_user, name="api_create_new_user"),
    path("user/<slug:username>/",
         api_create_new_user,
         name="api_check_username"),
]
