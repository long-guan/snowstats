from django.db import models


# Create your models here.
class Run(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=50)

    class Category(models.TextChoices):
        GREEN = "Green"
        BLUE = "Blue"
        BLACK = "Black"
        DOUBLE_BLACK = "Double Black"
        CHAIRLIFT = "Chairlift"

    category = models.CharField(max_length=50, choices=Category.choices)
