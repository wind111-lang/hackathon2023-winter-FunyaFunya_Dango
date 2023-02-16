from django.contrib import admin
from django.urls import path
from gourmet import views

urlpatterns = [
    path('<param>', views.index)
]