from django.views.decorators.http import require_http_methods
from .models import Run, Video, Like, Dislike
from django.http import JsonResponse
from common.json import ModelEncoder
import json
from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken


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
                "total": o.get_overall(),
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


class LikeView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request, video_id):
        if request.method == "POST":
            print(request.user.username)
            print(request.user.id)
            content = json.loads(request.body)
            print(content)
            # error handling if video_id doesn't exists
            if Video.objects.filter(id=video_id).exists() is False:
                return JsonResponse(
                    {"message": "video_id does not exists"},
                    status=404,
                )
            # error handling if username doesn't exists
            if User.objects.filter(username=content["username"]).exists() is False:
                return JsonResponse(
                    {"message": "username does not exists"},
                    status=404,
                )
            video = Video.objects.get(id=video_id)
            user = User.objects.get(username=content["username"])
            #  if user is in Dislike, remove user from Dislike
            remove_dislike = False
            if Dislike.objects.filter(video=video).exists():
                dislikes = Dislike.objects.get(video=video)
                if user in dislikes.users.all():
                    dislikes.users.remove(user)
                    remove_dislike = True
            try:
                # create the Like object for video if it doesn't exist
                if Like.objects.filter(video=video).exists() is False:
                    # add user to Like if user not in Like
                    likes = Like.objects.create(video=video)
                    likes.users.add(user)
                else:
                    # remove user from Like if user already in Like
                    likes = Like.objects.get(video=video)
                    if user in likes.users.all():
                        likes.users.remove(user)
                        return JsonResponse(
                            {"message": "video unliked"},
                            status=200,
                        )
                    # add user to Like if user not in Like
                    else:
                        likes.users.add(user)
            except Exception as e:
                print(e)
                return JsonResponse(
                    {"message": "something went wrong"},
                    status=400,
                    safe=False
                )
            if remove_dislike is True:
                return JsonResponse(
                    {"message": "video liked and removed user from Dislike"},
                    status=200,
                )
            else:
                return JsonResponse(
                    {"message": "video liked"},
                    status=200,
                )


class DislikeView(APIView):
    permission_classes = (IsAuthenticated,)

    # removes the user from Like when adding to Dislike
    def post(self, request, video_id):
        if request.method == "POST":
            content = json.loads(request.body)
            # error handling if video_id doesn't exists
            if Video.objects.filter(id=video_id).exists() is False:
                return JsonResponse(
                    {"message": "video_id does not exists"},
                    status=404,
                )
            # error handling if username doesn't exists
            if User.objects.filter(username=content["username"]).exists() is False:
                return JsonResponse(
                    {"message": "username does not exists"},
                    status=404,
                )
            video = Video.objects.get(id=video_id)
            user = User.objects.get(username=content["username"])
            #  if user is in Like, remove user from Like
            remove_like = False
            if Like.objects.filter(video=video).exists():
                likes = Like.objects.get(video=video)
                if user in likes.users.all():
                    likes.users.remove(user)
                    remove_like = True
            try:
                # create the Dislike object for video if it doesn't exist
                if Dislike.objects.filter(video=video).exists() is False:
                    # add user to Dislike if user not in Dislike
                    dislikes = Dislike.objects.create(video=video)
                    dislikes.users.add(user)
                else:
                    # remove user from Dislike if user already in Dislike
                    dislikes = Dislike.objects.get(video=video)
                    if user in dislikes.users.all():
                        dislikes.users.remove(user)
                        return JsonResponse(
                            {"message": "video undisliked"},
                            status=200,
                        )
                    # add user to Dislike if user not in Dislike
                    else:
                        dislikes.users.add(user)
            except Exception as e:
                print(e)
                return JsonResponse(
                    {"message": "something went wrong"},
                    status=400,
                    safe=False
                )
            if remove_like is True:
                return JsonResponse(
                    {"message": "video disliked and removed user from Like"},
                    status=200,
                )
            else:
                return JsonResponse(
                    {"message": "video disliked"},
                    status=200,
                )


class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(
            username=username, password=password)

        refresh = RefreshToken.for_user(user)

        return JsonResponse(
            {
               'refresh': str(refresh),
               'access': str(refresh.access_token),
               'username': username,
               "user_id": user.id,
            }
        )
