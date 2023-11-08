from django.views.decorators.http import require_http_methods
from .models import Run, Video
from django.http import JsonResponse
from common.json import ModelEncoder
import json


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
        "vote",
    ]

    def get_extra_data(self, o):
        return {
            "run": {
                "title": o.run.title,
                "id": o.run.id,
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
        videos = Video.objects.filter(run_id=id).order_by('vote')
        return JsonResponse(
            {"videos": videos},
            encoder=VideoListEncoder,
        )


# @require_http_methods(["PUT"])
# def api_upvote_video(request, id):
#     if request.method == "PUT":
#         content = json.loads(request.)
