from django.db import models


# Create your models here.
class CategoryVO(models.Model):
    category = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.category}"


class Run(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)
    category = models.ForeignKey(
        CategoryVO,
        related_name="runs",
        on_delete=models.PROTECT
    )

    def __str__(self):
        return f"{self.title}"


class Video(models.Model):
    src = models.CharField(max_length=150)
    vote = models.IntegerField(default=0)
    run = models.ForeignKey(
        Run,
        related_name="videos",
        on_delete=models.PROTECT
    )
    time = models.TimeField(auto_now=False, auto_now_add=True)
