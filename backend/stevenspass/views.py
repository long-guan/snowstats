from django.views.decorators.http import require_http_methods
from .models import Run, Video
from django.http import JsonResponse
from common.json import ModelEncoder
import json
from django.contrib.auth.models import User


class RunListEncoder(ModelEncoder):
    model = Run
    properties = [
        "id",
        "title",
    ]

    def get_extra_data(self, o):
        return {"category": o.category.category}


class VideoListEncoder(ModelEncoder):
    model = Video
    properties = [
        "id",
        "src",
    ]

    def get_extra_data(self, o):
        return {
            "run": {
                "title": o.run.title,
                "id": o.run.id,
            },
            "vote": {
                "likes": o.get_total_likes(),
                "dislikes": o.get_total_dislikes(),
            },
            "user": {
                "username": o.user.username,
            }
        }


@require_http_methods(["GET"])
def api_list_runs(request):
    if request.method == "GET":
        runs = Run.objects.all()
        return JsonResponse(
            {"runs": runs},
            encoder=RunListEncoder,
        )


@require_http_methods(["GET", "POST"])
def api_list_videos(request):
    if request.method == "GET":
        videos = Video.objects.all()
        return JsonResponse(
            {"videos": videos},
            encoder=VideoListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            run = Run.objects.get(id=content["run_id"])
            print(run)
            content["run"] = run
        except Run.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid run id"},
                status=400,
            )
        video = Video.objects.create(**content)
        return JsonResponse(
            video,
            encoder=VideoListEncoder,
            safe=False,
        )


@require_http_methods(["GET"])
def api_list_run_videos(request, id):
    if request.method == "GET":
        videos = Video.objects.filter(run_id=id)
        return JsonResponse(
            {"videos": videos},
            encoder=VideoListEncoder,
        )


@require_http_methods(["POST", "GET"])
def api_create_new_user(request, username=None):
    if request.method == "POST":
        content = json.loads(request.body)
        if User.objects.filter(username=content["username"]).exists():
            return JsonResponse(
                {"message": "username already exists"},
                status=400,
            )
        try:
            User.objects.create_user(
                content["username"],
                email=None,
                password=content["password"]
            )
        except Exception as e:
            print("except")
            return JsonResponse(
                {"message": e},
                status=400,
                safe=False
            )
        return JsonResponse(
            {"message": "account successfully created"},
            status=200,
        )
    else:
        if User.objects.filter(username=username).exists():
            return JsonResponse(
                {"message": "username already exists"},
                status=200,
            )
        else:
            return JsonResponse(
                {"message": "username is available"},
                status=404,
            )
